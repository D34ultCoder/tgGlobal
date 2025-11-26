import React from 'react';
import { View, Text } from 'react-native';

interface PageHeaderProps {
  title: string;
  className?: string;
}

export function PageHeader({ title, className = '' }: PageHeaderProps) {
  return (
    <View className={`px-5 py-4 ${className}`}>
      <Text className="text-xl font-semibold text-center text-gray-900">{title}</Text>
    </View>
  );
}
