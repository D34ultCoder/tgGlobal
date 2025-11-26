import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

interface TabOption {
  id: string;
  label: string;
}

interface TabFilterProps {
  tabs: TabOption[];
  activeTab: string;
  onTabChange: (id: string) => void;
  className?: string;
}

export function TabFilter({ tabs, activeTab, onTabChange, className = '' }: TabFilterProps) {
  return (
    <View className={className}>
      <View className="relative">
        {/* Connecting border line */}
        <View className="absolute bottom-0 left-0 right-0 h-0.5 bg-gray-100" />

        <View className="flex-row justify-between">
          {tabs.map((tab) => (
            <TouchableOpacity
              key={tab.id}
              onPress={() => onTabChange(tab.id)}
            >
              <Text
                className={`text-base font-medium pb-2 ${activeTab === tab.id ? 'text-primary' : 'text-gray-500'
                  }`}
              >
                {tab.label}
              </Text>
              {activeTab === tab.id ? (
                <View className="h-0.5 bg-primary rounded-full" />
              ) : (
                <View className="h-0.5 bg-transparent" />
              )}
            </TouchableOpacity>
          ))}
        </View>
      </View>
    </View>
  );
}
