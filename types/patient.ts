export interface Patient {
  id: string;
  name: string;
  gender: 'Male' | 'Female';
  age: number;
  avatar: string;
  status: 'all' | 'pending' | 'past';
  phone: string;
  email: string;
  lastAppointment: string;
  upcomingAppointment: string;
}

export type PatientFilter = 'all' | 'pending' | 'past';
