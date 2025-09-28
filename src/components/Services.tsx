import React, { useState } from 'react';
import { 
  Wrench, 
  Heart, 
  Clock, 
  MapPin, 
  Phone, 
  CheckCircle, 
  Zap, 
  Shield, 
  Truck,
  Calendar,
  User,
  Car,
  AlertTriangle
} from 'lucide-react';
import { ServiceBooking, DeliveryArea } from '../types';

interface ServicesProps {
  deliveryAreas: DeliveryArea[];
  onServiceBooked: (booking: ServiceBooking) => void;
}

const Services: React.FC<ServicesProps> = ({ deliveryAreas, onServiceBooked }) => {
  const [activeService, setActiveService] = useState<'roadside' | 'health-check' | null>(null);
  const [bookingForm, setBookingForm] = useState<Partial<ServiceBooking>>({
    serviceType: 'roadside-rescue',
    customerName: '',
    contactNumber: '',
    email: '',
    vehicleInfo: {
      make: '',
      model: '',
      year: '',
      plateNumber: ''
    },
    location: {
      address: '',
      area: '',
      coordinates: undefined
    },
    preferredTime: '',
    emergency: false,
    notes: ''
  });

  const handleInputChange = (field: string, value: any) => {
    if (field.includes('.')) {
      const [parent, child] = field.split('.');
      setBookingForm(prev => ({
        ...prev,
        [parent]: {
          ...prev[parent as keyof typeof prev],
          [child]: value
        }
      }));
    } else {
      setBookingForm(prev => ({
        ...prev,
        [field]: value
      }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!bookingForm.customerName || !bookingForm.contactNumber || !bookingForm.location?.address) {
      alert('Please fill in all required fields');
      return;
    }

    const newBooking: ServiceBooking = {
      id: Date.now().toString(),
      serviceType: bookingForm.serviceType as 'roadside-rescue' | 'battery-health-check',
      customerName: bookingForm.customerName!,
      contactNumber: bookingForm.contactNumber!,
      email: bookingForm.email || '',
      vehicleInfo: bookingForm.vehicleInfo!,
      location: bookingForm.location!,
      preferredTime: bookingForm.preferredTime!,
      emergency: bookingForm.emergency || false,
      notes: bookingForm.notes || '',
      status: 'pending',
      createdAt: new Date().toISOString()
    };

    onServiceBooked(newBooking);
    alert('Service request submitted successfully! We will contact you shortly.');
    setActiveService(null);
    setBookingForm({
      serviceType: 'roadside-rescue',
      customerName: '',
      contactNumber: '',
      email: '',
      vehicleInfo: { make: '', model: '', year: '', plateNumber: '' },
      location: { address: '', area: '', coordinates: undefined },
      preferredTime: '',
      emergency: false,
      notes: ''
    });
  };

  return (
    <div className="min-h-screen bg-battery-background py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-poppins font-bold text-battery-text mb-6">
            Our Services
          </h1>
          <p className="text-xl text-battery-text-light max-w-3xl mx-auto">
            Professional battery services across CDO, MisOr, and Other areas. 
            Fast, reliable, and backed by our 6 months - 1 year warranty guarantee.
          </p>
        </div>

        {/* Service Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {/* Roadside Res-Q */}
          <div className="bg-white rounded-3xl shadow-xl p-8 border border-gray-100 hover:shadow-2xl transition-all duration-300">
            <div className="flex items-center space-x-4 mb-6">
              <div className="w-16 h-16 bg-gradient-to-br from-red-500 to-red-600 rounded-2xl flex items-center justify-center">
                <Wrench className="h-8 w-8 text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-poppins font-bold text-battery-text">Roadside Res-Q</h3>
                <p className="text-battery-text-light">Emergency battery assistance</p>
              </div>
            </div>

            <div className="space-y-4 mb-8">
              <div className="flex items-center space-x-3">
                <Clock className="h-5 w-5 text-red-500" />
                <span className="font-semibold text-battery-text">45-Minute Response Time</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="h-5 w-5 text-red-500" />
                <span className="text-battery-text-light">CDO, MisOr, and Other Areas</span>
              </div>
              <div className="flex items-center space-x-3">
                <Zap className="h-5 w-5 text-red-500" />
                <span className="text-battery-text-light">Jump-start or battery replacement</span>
              </div>
              <div className="flex items-center space-x-3">
                <Shield className="h-5 w-5 text-red-500" />
                <span className="text-battery-text-light">24/7 emergency service</span>
              </div>
            </div>

            <div className="bg-red-50 rounded-xl p-4 mb-6">
              <h4 className="font-semibold text-red-800 mb-2">What's Included:</h4>
              <ul className="text-sm text-red-700 space-y-1">
                <li>• On-site battery testing</li>
                <li>• Jump-start service</li>
                <li>• Battery replacement (if needed)</li>
                <li>• Basic electrical system check</li>
                <li>• 6 months - 1 year warranty on new batteries</li>
                <li>• <strong>Alternator Test</strong> - Check charging system</li>
                <li>• <strong>Cranking Test</strong> - Measure starting power</li>
              </ul>
            </div>

            <button
              onClick={() => setActiveService('roadside')}
              className="w-full bg-gradient-to-r from-red-500 to-red-600 text-white py-4 rounded-xl font-bold text-lg hover:from-red-600 hover:to-red-700 transition-all duration-300 transform hover:scale-105"
            >
              Book Emergency Service
            </button>
          </div>

          {/* Battery Health Check */}
          <div className="bg-white rounded-3xl shadow-xl p-8 border border-gray-100 hover:shadow-2xl transition-all duration-300">
            <div className="flex items-center space-x-4 mb-6">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center">
                <Heart className="h-8 w-8 text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-poppins font-bold text-battery-text">Battery Health Check</h3>
                <p className="text-battery-text-light">Comprehensive diagnostic service</p>
              </div>
            </div>

            <div className="space-y-4 mb-8">
              <div className="flex items-center space-x-3">
                <Clock className="h-5 w-5 text-blue-500" />
                <span className="font-semibold text-battery-text">30-Minute Service</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="h-5 w-5 text-blue-500" />
                <span className="text-battery-text-light">At your location or our shop</span>
              </div>
              <div className="flex items-center space-x-3">
                <Zap className="h-5 w-5 text-blue-500" />
                <span className="text-battery-text-light">Alternator & cranking tests</span>
              </div>
              <div className="flex items-center space-x-3">
                <Shield className="h-5 w-5 text-blue-500" />
                <span className="text-battery-text-light">Detailed health report</span>
              </div>
            </div>

            <div className="bg-blue-50 rounded-xl p-4 mb-6">
              <h4 className="font-semibold text-blue-800 mb-2">What's Included:</h4>
              <ul className="text-sm text-blue-700 space-y-1">
                <li>• Battery voltage and CCA testing</li>
                <li>• <strong>Alternator Test</strong> - Check charging system</li>
                <li>• <strong>Cranking Test</strong> - Measure starting power</li>
                <li>• Terminal and cable inspection</li>
                <li>• Detailed diagnostic report</li>
                <li>• Professional recommendations</li>
              </ul>
            </div>

            <button
              onClick={() => setActiveService('health-check')}
              className="w-full bg-gradient-to-r from-blue-500 to-blue-600 text-white py-4 rounded-xl font-bold text-lg hover:from-blue-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105"
            >
              Schedule Health Check
            </button>
          </div>
        </div>

        {/* Coverage Areas */}
        <div className="bg-white rounded-3xl shadow-xl p-8 mb-16">
          <h2 className="text-3xl font-poppins font-bold text-battery-text text-center mb-8">
            Service Coverage Areas
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {deliveryAreas.map(area => (
              <div key={area.id} className="text-center p-6 bg-gradient-to-br from-battery-primary/5 to-battery-accent/5 rounded-2xl">
                <div className="w-16 h-16 bg-battery-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <MapPin className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-battery-text mb-2">{area.name}</h3>
                <p className="text-battery-text-light mb-4">{area.coverage.join(', ')}</p>
                <div className="space-y-2">
                  <div className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-semibold ${
                    area.isFreeDelivery 
                      ? 'bg-green-100 text-green-800' 
                      : 'bg-yellow-100 text-yellow-800'
                  }`}>
                    {area.isFreeDelivery ? 'Free Delivery' : `+₱${area.deliveryFee} Delivery`}
                  </div>
                  <div className="text-sm text-battery-text-light">
                    {area.deliveryTime}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Booking Modal */}
        {activeService && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
            <div className="bg-white rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
              <div className="p-8">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-2xl font-poppins font-bold text-battery-text">
                    Book {activeService === 'roadside' ? 'Roadside Res-Q' : 'Battery Health Check'}
                  </h3>
                  <button
                    onClick={() => setActiveService(null)}
                    className="text-gray-400 hover:text-gray-600"
                  >
                    <X className="h-6 w-6" />
                  </button>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Service Type */}
                  <input type="hidden" value={activeService === 'roadside' ? 'roadside-rescue' : 'battery-health-check'} />

                  {/* Customer Info */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        value={bookingForm.customerName || ''}
                        onChange={(e) => handleInputChange('customerName', e.target.value)}
                        className="w-full p-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-battery-primary focus:border-transparent"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Contact Number *
                      </label>
                      <input
                        type="tel"
                        value={bookingForm.contactNumber || ''}
                        onChange={(e) => handleInputChange('contactNumber', e.target.value)}
                        className="w-full p-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-battery-primary focus:border-transparent"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Email (Optional)
                    </label>
                    <input
                      type="email"
                      value={bookingForm.email || ''}
                      onChange={(e) => handleInputChange('email', e.target.value)}
                      className="w-full p-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-battery-primary focus:border-transparent"
                    />
                  </div>

                  {/* Vehicle Info */}
                  <div className="border-t pt-6">
                    <h4 className="text-lg font-semibold text-gray-700 mb-4">Vehicle Information</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                          Make
                        </label>
                        <input
                          type="text"
                          value={bookingForm.vehicleInfo?.make || ''}
                          onChange={(e) => handleInputChange('vehicleInfo.make', e.target.value)}
                          className="w-full p-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-battery-primary focus:border-transparent"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                          Model
                        </label>
                        <input
                          type="text"
                          value={bookingForm.vehicleInfo?.model || ''}
                          onChange={(e) => handleInputChange('vehicleInfo.model', e.target.value)}
                          className="w-full p-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-battery-primary focus:border-transparent"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                          Year
                        </label>
                        <input
                          type="text"
                          value={bookingForm.vehicleInfo?.year || ''}
                          onChange={(e) => handleInputChange('vehicleInfo.year', e.target.value)}
                          className="w-full p-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-battery-primary focus:border-transparent"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                          Plate Number (Optional)
                        </label>
                        <input
                          type="text"
                          value={bookingForm.vehicleInfo?.plateNumber || ''}
                          onChange={(e) => handleInputChange('vehicleInfo.plateNumber', e.target.value)}
                          className="w-full p-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-battery-primary focus:border-transparent"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Location */}
                  <div className="border-t pt-6">
                    <h4 className="text-lg font-semibold text-gray-700 mb-4">Service Location</h4>
                    <div className="space-y-4">
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                          Address *
                        </label>
                        <textarea
                          value={bookingForm.location?.address || ''}
                          onChange={(e) => handleInputChange('location.address', e.target.value)}
                          className="w-full p-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-battery-primary focus:border-transparent"
                          rows={3}
                          required
                        />
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-semibold text-gray-700 mb-2">
                            Area
                          </label>
                          <select
                            value={bookingForm.location?.area || ''}
                            onChange={(e) => handleInputChange('location.area', e.target.value)}
                            className="w-full p-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-battery-primary focus:border-transparent"
                          >
                            <option value="">Select Area</option>
                            {deliveryAreas.map(area => (
                              <option key={area.id} value={area.code}>{area.name}</option>
                            ))}
                          </select>
                        </div>
                        <div>
                          <label className="block text-sm font-semibold text-gray-700 mb-2">
                            Preferred Time
                          </label>
                          <input
                            type="datetime-local"
                            value={bookingForm.preferredTime || ''}
                            onChange={(e) => handleInputChange('preferredTime', e.target.value)}
                            className="w-full p-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-battery-primary focus:border-transparent"
                          />
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Emergency Checkbox */}
                  {activeService === 'roadside' && (
                    <div className="flex items-center space-x-3">
                      <input
                        type="checkbox"
                        id="emergency"
                        checked={bookingForm.emergency || false}
                        onChange={(e) => handleInputChange('emergency', e.target.checked)}
                        className="h-4 w-4 text-red-600 focus:ring-red-500 border-gray-300 rounded"
                      />
                      <label htmlFor="emergency" className="text-sm font-semibold text-red-600">
                        This is an emergency - I need immediate assistance
                      </label>
                    </div>
                  )}

                  {/* Notes */}
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Additional Notes (Optional)
                    </label>
                    <textarea
                      value={bookingForm.notes || ''}
                      onChange={(e) => handleInputChange('notes', e.target.value)}
                      className="w-full p-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-battery-primary focus:border-transparent"
                      rows={3}
                      placeholder="Describe your issue or any special requirements..."
                    />
                  </div>

                  {/* Submit Button */}
                  <div className="flex space-x-4 pt-6">
                    <button
                      type="button"
                      onClick={() => setActiveService(null)}
                      className="flex-1 py-3 px-6 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      className="flex-1 py-3 px-6 bg-battery-primary text-white rounded-lg hover:bg-battery-primary-dark transition-colors font-semibold"
                    >
                      Submit Request
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Services;
