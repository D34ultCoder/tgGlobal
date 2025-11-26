import React from 'react';
import { View, Text } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

interface EmptyStateProps {
  title: string;
  description: string;
  icon?: keyof typeof Ionicons.glyphMap;
}

export function EmptyState({ title, description, icon = 'document-text-outline' }: EmptyStateProps) {
  return (
    <View className="flex-1 items-center justify-center py-12 px-4">
      <View className="w-16 h-16 bg-gray-50 rounded-full items-center justify-center mb-4">
        <Ionicons name={icon} size={32} color="#9CA3AF" />
      </View>
      <Text className="text-lg font-semibold text-gray-900 text-center mb-2">
        {title}
      </Text>
      <Text className="text-sm text-gray-500 text-center max-w-[250px]">
        {description}
      </Text>
    </View>
  );
}
