import { useState, useEffect } from 'react';
import { supabase } from '../lib/supabase';
import { Banner } from '../types';

export const useBanners = () => {
  const [banners, setBanners] = useState<Banner[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchBanners = async () => {
    try {
      setLoading(true);
      const { data, error } = await supabase
        .from('banners')
        .select('*')
        .eq('is_active', true)
        .order('sort_order', { ascending: true });

      if (error) throw error;
      setBanners(data || []);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to fetch banners');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchBanners();
  }, []);

  return { banners, loading, error, refetch: fetchBanners };
};

export const useBannerManagement = () => {
  const [banners, setBanners] = useState<Banner[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchAllBanners = async () => {
    try {
      setLoading(true);
      const { data, error } = await supabase
        .from('banners')
        .select('*')
        .order('sort_order', { ascending: true });

      if (error) throw error;
      setBanners(data || []);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to fetch banners');
    } finally {
      setLoading(false);
    }
  };

  const addBanner = async (banner: Omit<Banner, 'id' | 'created_at' | 'updated_at'>) => {
    try {
      const { data, error } = await supabase
        .from('banners')
        .insert([banner])
        .select()
        .single();

      if (error) throw error;
      setBanners(prev => [...prev, data]);
      return { data, error: null };
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Failed to add banner';
      setError(errorMessage);
      return { data: null, error: { message: errorMessage } };
    }
  };

  const updateBanner = async (id: string, updates: Partial<Banner>) => {
    try {
      const { data, error } = await supabase
        .from('banners')
        .update({ ...updates, updated_at: new Date().toISOString() })
        .eq('id', id)
        .select()
        .single();

      if (error) throw error;
      setBanners(prev => prev.map(banner => banner.id === id ? data : banner));
      return { data, error: null };
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Failed to update banner';
      setError(errorMessage);
      return { data: null, error: { message: errorMessage } };
    }
  };

  const deleteBanner = async (id: string) => {
    try {
      const { error } = await supabase
        .from('banners')
        .delete()
        .eq('id', id);

      if (error) throw error;
      setBanners(prev => prev.filter(banner => banner.id !== id));
      return { error: null };
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Failed to delete banner';
      setError(errorMessage);
      return { error: { message: errorMessage } };
    }
  };

  const updateBannerOrder = async (bannerIds: string[]) => {
    try {
      const updates = bannerIds.map((id, index) => ({
        id,
        sort_order: index + 1
      }));

      for (const update of updates) {
        await supabase
          .from('banners')
          .update({ sort_order: update.sort_order })
          .eq('id', update.id);
      }

      // Refresh the banners to get updated order
      await fetchAllBanners();
      return { error: null };
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Failed to update banner order';
      setError(errorMessage);
      return { error: { message: errorMessage } };
    }
  };

  useEffect(() => {
    fetchAllBanners();
  }, []);

  return {
    banners,
    loading,
    error,
    addBanner,
    updateBanner,
    deleteBanner,
    updateBannerOrder,
    refetch: fetchAllBanners
  };
};
