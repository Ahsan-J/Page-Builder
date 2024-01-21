'use client'

import { createReduxStore } from "@/redux";
import { PropsWithChildren, useMemo } from "react";
import { Provider } from "react-redux";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ThemeProvider } from "forging-react";
import theme from '@/constant/theme'

const AppGlobalProvider = (props: PropsWithChildren) => {
    const store = useMemo(() => createReduxStore(), []);
    const queryClient = useMemo(() => new QueryClient(), []);

    return (
        <Provider store={store}>
            <QueryClientProvider client={queryClient}>
                <ThemeProvider config={theme}>
                    { props.children }
                </ThemeProvider>
            </QueryClientProvider>
        </Provider>
    )
}

export default AppGlobalProvider;