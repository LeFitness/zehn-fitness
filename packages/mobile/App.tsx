import React, { useEffect, useState } from 'react';
import Login from '@mobile/features/login/LoginScreen';
import BottomTabs from '@mobile/navigation/BottomTabs';
import { RootStackParamList } from '@mobile/navigation/NavigationConstants';
import useAppStore from '@mobile/stores/useAppStore';
import { colors } from '@mobile/theme/colors';
import { DefaultTheme, NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { IntlProvider } from 'react-intl';
import { LanguageContext } from '@mobile/context/LanguageContext';
import type { AvailableLocale } from '@mobile/context/LanguageContext';
import SplashScreen from 'react-native-splash-screen';

const appTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: colors.darkTheme,
  },
};

interface IntlStructure {
  defaultMessage: string;
}

type MessagesType = Record<string, IntlStructure> | undefined;

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const loadLocaleData = (locale: AvailableLocale): Promise<any> => {
  switch (locale) {
    case 'es':
      return import('./i18n/locale/es.json');
    default:
      return import('./i18n/locale/en.json');
  }
};

const App = () => {
  const RootStack = createNativeStackNavigator<RootStackParamList>();
  const isAuthenticated = useAppStore(state => state.authToken);

  // Defaulting this to english for now
  const locale = 'es';

  const [loadedMessages, setMessages] = useState<MessagesType>(undefined);
  const [currentLocale, setLocale] = useState<AvailableLocale>(locale);
  const [loading, setLoading] = useState<boolean>(true); // Added loading state

  const getKeyValueOfJson = (
    messages: MessagesType,
  ): Record<string, string> | undefined => {
    if (!messages) {
      return;
    }

    return Object.entries(messages).reduce((messages, [id, key]) => {
      messages[id.replace(/_dot_/g, '.')] = key.defaultMessage;
      return messages;
    }, {} as Record<string, string>);
  };

  const hideSplashScreen = () => {
    SplashScreen.hide();
    setLoading(false);
  };

  useEffect(() => {
    setLoading(true);
    SplashScreen.show();

    loadLocaleData(currentLocale)
      .then(data => setMessages(data.default))
      .finally(() => hideSplashScreen());
  }, [currentLocale]);

  if (loading) {
    return null;
  }

  return (
    <LanguageContext.Provider value={{ locale: currentLocale, setLocale }}>
      <IntlProvider
        locale={currentLocale}
        defaultLocale="en"
        messages={getKeyValueOfJson(loadedMessages)}>
        <NavigationContainer theme={appTheme}>
          <RootStack.Navigator
            initialRouteName={isAuthenticated ? 'BottomTabs' : 'Login'}
            screenOptions={{ headerShown: false }}>
            {isAuthenticated ? (
              <RootStack.Screen name="BottomTabs" component={BottomTabs} />
            ) : (
              <RootStack.Screen name="Login" component={Login} />
            )}
          </RootStack.Navigator>
        </NavigationContainer>
      </IntlProvider>
    </LanguageContext.Provider>
  );
};

export default App;
