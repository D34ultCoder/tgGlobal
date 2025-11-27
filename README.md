# MindStir Mobile App

A React Native mobile application for patient management, an assessment test for Tactology Global, built with Expo and integrated with a NestJS backend.

##  How to Run the Project

### Prerequisites
- Node.js (v18 or higher)
- npm
- Expo Go app on your physical device OR Android Studio Emulator / iOS Simulator

### Quick Start
1.  **Install Dependencies**
    ```bash
    npm install
    ```

2.  **Start the Development Server**
    ```bash
    npx expo start -c
    ```
    The `-c` flag clears the cache, which is recommended after dependency updates.

3.  **Run on Device/Emulator**
    -   **Physical Device**: Scan the QR code with the Expo Go app (Android) or Camera app (iOS).
    -   **Android Emulator**: Press `a` in the terminal.
    -   **iOS Simulator**: Press `i` in the terminal (macOS only).

---

##  Libraries Used

-   **Framework**: `Expo` (SDK 54) & `React Native` - For cross-platform mobile development.
-   **Routing**: `Expo Router` - File-based routing system (similar to Next.js).
-   **State Management**: `Redux Toolkit` & `React Redux` - For global state management.
-   **Data Fetching**: `RTK Query` - For efficient data fetching and caching.
-   **Styling**: `NativeWind` (Tailwind CSS) - For utility-first styling.
-   **UI Components**: `@expo/vector-icons` - For icons.
-   **Persistence**: `redux-persist` & `@react-native-async-storage/async-storage` - To persist state across app restarts.

---

##  Architectural Decisions

1.  **Expo Router (File-Based Routing)**:
    -   The app uses the `app/` directory for routing.
    -   `(tabs)` folder organizes the main tab-based navigation.
    -   `_layout.tsx` files define the navigation structure (Stacks, Tabs) and wrap screens with providers (Redux, Theme).

2.  **Redux Toolkit & RTK Query**:
    -   **Why?** To manage global state (like authentication in the future) and handle API interactions efficiently with caching, polling, and optimistic updates.
    -   **Structure**:
        -   `store/services/`: Contains API definitions (`patient.service.ts`, `consultation-note.service.ts`).
        -   `store/slices/`: Contains local state slices.
        -   `store/index.ts`: Configures the store and persistence.

3.  **Component-Based Design**:
    -   Reusable UI components are located in `components/` (e.g., `PatientCard`, `ConsultationNotesModal`).
    -   Atomic UI elements (buttons, inputs) are in `components/ui/`.

---

## Implementation Details

-   **Backend Integration**:
    -   The app connects to a local NestJS backend.
    -   **Android Emulator Support**: The `base.service.ts` automatically detects the platform and switches the API URL to `http://10.0.2.2:8080` for Android emulators (which maps to `localhost` on the host machine) and `http://localhost:8080` for iOS/Web.

-   **Safe Area Handling**:
    -   The app uses `react-native-safe-area-context` to ensure content renders correctly on devices with notches and dynamic islands.
    -   Tab bar styles are configured to respect system insets automatically.

-   **Optimistic UI & Caching**:
    -   RTK Query tags (`Patients`) are used to automatically invalidate and refetch data when mutations (create/update/delete) occur, ensuring the UI is always in sync with the server.

-   **Custom Animations**:
    -   `LayoutAnimation` is used in `PatientCard` for smooth expansion/collapse effects.
