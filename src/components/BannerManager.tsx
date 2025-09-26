import React, { useState } from 'react';
import { Plus, Edit, Trash2, Save, X, ArrowLeft, ArrowUp, ArrowDown, Eye, EyeOff } from 'lucide-react';
import { Banner } from '../types';
import { useBannerManagement } from '../hooks/useBanners';
import ImageUpload from './ImageUpload';

interface BannerManagerProps {
  onBack: () => void;
}

const BannerManager: React.FC<BannerManagerProps> = ({ onBack }) => {
  const { banners, loading, addBanner, updateBanner, deleteBanner, updateBannerOrder } = useBannerManagement();
  const [currentView, setCurrentView] = useState<'list' | 'add' | 'edit'>('list');
  const [editingBanner, setEditingBanner] = useState<Banner | null>(null);
  const [isProcessing, setIsProcessing] = useState(false);
  const [formData, setFormData] = useState<Partial<Banner>>({
    title: '',
    subtitle: '',
    description: '',
    button_text: 'Learn More',
    button_link: '#',
    background_color: '#1E3A8A',
    text_color: '#FFFFFF',
    is_active: true,
    sort_order: 0
  });

  const handleAddBanner = () => {
    setCurrentView('add');
    setEditingBanner(null);
    setFormData({
      title: '',
      subtitle: '',
      description: '',
      button_text: 'Learn More',
      button_link: '#',
      background_color: '#1E3A8A',
      text_color: '#FFFFFF',
      is_active: true,
      sort_order: banners.length + 1
    });
  };

  const handleEditBanner = (banner: Banner) => {
    setEditingBanner(banner);
    setFormData(banner);
    setCurrentView('edit');
  };

  const handleDeleteBanner = async (id: string) => {
    if (confirm('Are you sure you want to delete this banner? This action cannot be undone.')) {
      try {
        setIsProcessing(true);
        await deleteBanner(id);
      } catch (error) {
        alert('Failed to delete banner. Please try again.');
      } finally {
        setIsProcessing(false);
      }
    }
  };

  const handleSaveBanner = async () => {
    if (!formData.title) {
      alert('Please enter a title for the banner');
      return;
    }

    try {
      setIsProcessing(true);
      if (editingBanner) {
        await updateBanner(editingBanner.id, formData);
      } else {
        await addBanner(formData as Omit<Banner, 'id' | 'created_at' | 'updated_at'>);
      }
      setCurrentView('list');
      setEditingBanner(null);
    } catch (error) {
      alert('Failed to save banner. Please try again.');
    } finally {
      setIsProcessing(false);
    }
  };

  const handleCancel = () => {
    setCurrentView('list');
    setEditingBanner(null);
  };

  const handleMoveUp = async (index: number) => {
    if (index === 0) return;
    const newOrder = [...banners];
    [newOrder[index], newOrder[index - 1]] = [newOrder[index - 1], newOrder[index]];
    const bannerIds = newOrder.map(banner => banner.id);
    await updateBannerOrder(bannerIds);
  };

  const handleMoveDown = async (index: number) => {
    if (index === banners.length - 1) return;
    const newOrder = [...banners];
    [newOrder[index], newOrder[index + 1]] = [newOrder[index + 1], newOrder[index]];
    const bannerIds = newOrder.map(banner => banner.id);
    await updateBannerOrder(bannerIds);
  };

  const toggleBannerStatus = async (banner: Banner) => {
    await updateBanner(banner.id, { is_active: !banner.is_active });
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-battery-background flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-battery-primary mx-auto mb-4"></div>
          <p className="text-battery-text-light">Loading banners...</p>
        </div>
      </div>
    );
  }

  // Form View (Add/Edit)
  if (currentView === 'add' || currentView === 'edit') {
    return (
      <div className="min-h-screen bg-battery-background">
        <div className="bg-white shadow-sm border-b">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16">
              <div className="flex items-center space-x-4">
                <button
                  onClick={handleCancel}
                  className="flex items-center space-x-2 text-battery-text-light hover:text-battery-text transition-colors duration-200"
                >
                  <ArrowLeft className="h-5 w-5" />
                  <span>Back</span>
                </button>
                <h1 className="text-2xl font-poppins font-semibold text-battery-text">
                  {currentView === 'add' ? 'Add New Banner' : 'Edit Banner'}
                </h1>
              </div>
              <div className="flex space-x-3">
                <button
                  onClick={handleCancel}
                  className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors duration-200 flex items-center space-x-2"
                >
                  <X className="h-4 w-4" />
                  <span>Cancel</span>
                </button>
                <button
                  onClick={handleSaveBanner}
                  disabled={isProcessing}
                  className="px-4 py-2 bg-battery-primary text-white rounded-lg hover:bg-battery-primary-dark transition-colors duration-200 flex items-center space-x-2 disabled:opacity-50"
                >
                  <Save className="h-4 w-4" />
                  <span>{isProcessing ? 'Saving...' : 'Save'}</span>
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-4xl mx-auto px-4 py-8">
          <div className="bg-white rounded-xl shadow-sm p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div>
                <label className="block text-sm font-medium text-battery-text mb-2">Title *</label>
                <input
                  type="text"
                  value={formData.title || ''}
                  onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-battery-primary focus:border-transparent"
                  placeholder="Enter banner title"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-battery-text mb-2">Subtitle</label>
                <input
                  type="text"
                  value={formData.subtitle || ''}
                  onChange={(e) => setFormData({ ...formData, subtitle: e.target.value })}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-battery-primary focus:border-transparent"
                  placeholder="Enter banner subtitle"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-battery-text mb-2">Button Text</label>
                <input
                  type="text"
                  value={formData.button_text || ''}
                  onChange={(e) => setFormData({ ...formData, button_text: e.target.value })}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-battery-primary focus:border-transparent"
                  placeholder="Enter button text"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-battery-text mb-2">Button Link</label>
                <input
                  type="text"
                  value={formData.button_link || ''}
                  onChange={(e) => setFormData({ ...formData, button_link: e.target.value })}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-battery-primary focus:border-transparent"
                  placeholder="Enter button link"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-battery-text mb-2">Background Color</label>
                <div className="flex items-center space-x-2">
                  <input
                    type="color"
                    value={formData.background_color || '#1E3A8A'}
                    onChange={(e) => setFormData({ ...formData, background_color: e.target.value })}
                    className="w-12 h-10 border border-gray-300 rounded cursor-pointer"
                  />
                  <input
                    type="text"
                    value={formData.background_color || '#1E3A8A'}
                    onChange={(e) => setFormData({ ...formData, background_color: e.target.value })}
                    className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-battery-primary focus:border-transparent"
                    placeholder="#1E3A8A"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-battery-text mb-2">Text Color</label>
                <div className="flex items-center space-x-2">
                  <input
                    type="color"
                    value={formData.text_color || '#FFFFFF'}
                    onChange={(e) => setFormData({ ...formData, text_color: e.target.value })}
                    className="w-12 h-10 border border-gray-300 rounded cursor-pointer"
                  />
                  <input
                    type="text"
                    value={formData.text_color || '#FFFFFF'}
                    onChange={(e) => setFormData({ ...formData, text_color: e.target.value })}
                    className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-battery-primary focus:border-transparent"
                    placeholder="#FFFFFF"
                  />
                </div>
              </div>
            </div>

            <div className="mb-8">
              <label className="block text-sm font-medium text-battery-text mb-2">Description</label>
              <textarea
                value={formData.description || ''}
                onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-battery-primary focus:border-transparent"
                placeholder="Enter banner description"
                rows={3}
              />
            </div>

            <div className="mb-8">
              <ImageUpload
                currentImage={formData.background_image_url}
                onImageChange={(imageUrl) => setFormData({ ...formData, background_image_url: imageUrl })}
              />
            </div>

            <div className="flex items-center space-x-4">
              <label className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  checked={formData.is_active ?? true}
                  onChange={(e) => setFormData({ ...formData, is_active: e.target.checked })}
                  className="rounded border-gray-300 text-battery-primary focus:ring-battery-primary"
                />
                <span className="text-sm font-medium text-battery-text">Active</span>
              </label>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // List View
  return (
    <div className="min-h-screen bg-battery-background">
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-4">
              <button
                onClick={onBack}
                className="flex items-center space-x-2 text-battery-text-light hover:text-battery-text transition-colors duration-200"
              >
                <ArrowLeft className="h-5 w-5" />
                <span>Back</span>
              </button>
              <h1 className="text-2xl font-poppins font-semibold text-battery-text">Banner Management</h1>
            </div>
            <button
              onClick={handleAddBanner}
              className="flex items-center space-x-2 bg-battery-primary text-white px-4 py-2 rounded-lg hover:bg-battery-primary-dark transition-colors duration-200"
            >
              <Plus className="h-4 w-4" />
              <span>Add New Banner</span>
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="bg-white rounded-xl shadow-sm overflow-hidden">
          {banners.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-battery-text-light mb-4">No banners found</p>
              <button
                onClick={handleAddBanner}
                className="bg-battery-primary text-white px-4 py-2 rounded-lg hover:bg-battery-primary-dark transition-colors duration-200"
              >
                Add Your First Banner
              </button>
            </div>
          ) : (
            <div className="divide-y divide-gray-200">
              {banners.map((banner, index) => (
                <div key={banner.id} className="p-6 hover:bg-gray-50">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <div className="flex flex-col space-y-1">
                        <button
                          onClick={() => handleMoveUp(index)}
                          disabled={index === 0}
                          className="p-1 text-gray-400 hover:text-gray-600 disabled:opacity-30 disabled:cursor-not-allowed"
                        >
                          <ArrowUp className="h-4 w-4" />
                        </button>
                        <button
                          onClick={() => handleMoveDown(index)}
                          disabled={index === banners.length - 1}
                          className="p-1 text-gray-400 hover:text-gray-600 disabled:opacity-30 disabled:cursor-not-allowed"
                        >
                          <ArrowDown className="h-4 w-4" />
                        </button>
                      </div>
                      
                      <div className="w-16 h-12 rounded-lg overflow-hidden bg-gray-200">
                        {banner.background_image_url ? (
                          <img
                            src={banner.background_image_url}
                            alt={banner.title}
                            className="w-full h-full object-cover"
                          />
                        ) : (
                          <div
                            className="w-full h-full"
                            style={{ backgroundColor: banner.background_color }}
                          />
                        )}
                      </div>
                      
                      <div className="flex-1">
                        <div className="flex items-center space-x-2 mb-1">
                          <h3 className="font-medium text-gray-900">{banner.title}</h3>
                          <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                            banner.is_active 
                              ? 'bg-green-100 text-green-800' 
                              : 'bg-red-100 text-red-800'
                          }`}>
                            {banner.is_active ? 'Active' : 'Inactive'}
                          </span>
                        </div>
                        {banner.subtitle && (
                          <p className="text-sm text-gray-500">{banner.subtitle}</p>
                        )}
                        <p className="text-sm text-gray-400">Order: {banner.sort_order}</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center space-x-2">
                      <button
                        onClick={() => toggleBannerStatus(banner)}
                        className="p-2 text-gray-400 hover:text-gray-600 transition-colors duration-200"
                        title={banner.is_active ? 'Deactivate' : 'Activate'}
                      >
                        {banner.is_active ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                      </button>
                      <button
                        onClick={() => handleEditBanner(banner)}
                        disabled={isProcessing}
                        className="p-2 text-gray-400 hover:text-gray-600 transition-colors duration-200"
                      >
                        <Edit className="h-4 w-4" />
                      </button>
                      <button
                        onClick={() => handleDeleteBanner(banner.id)}
                        disabled={isProcessing}
                        className="p-2 text-red-400 hover:text-red-600 transition-colors duration-200"
                      >
                        <Trash2 className="h-4 w-4" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default BannerManager;
