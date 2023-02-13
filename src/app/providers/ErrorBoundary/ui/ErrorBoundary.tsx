import React, { ErrorInfo, ReactNode, Suspense } from 'react';
import { PageError } from 'widgets/PageError';
// import { withTranslation } from 'react-i18next';

interface ErrorBounadaryProps {
    children: ReactNode;
}

interface ErrorBounadaryStateProps {
    hasError: boolean;
}

class ErrorBoundary extends React.Component<ErrorBounadaryProps, ErrorBounadaryStateProps> {
    constructor(props: ErrorBounadaryProps) {
        super(props);
        this.state = { hasError: false };
    }

    static getDerivedStateFromError(error: Error) {
        // Обновить состояние с тем, чтобы следующий рендер показал запасной UI.
        return { hasError: true };
    }

    componentDidCatch(error: Error, errorInfo: ErrorInfo) {
        // Можно также сохранить информацию об ошибке в соответствующую службу журнала ошибок
        console.log(error, errorInfo);
    }

    render() {
        const { hasError } = this.state;
        const { children } = this.props;

        if (hasError) {
            // Можно отрендерить запасной UI произвольного вида
            return <Suspense fallback=""><PageError /></Suspense>;
        }

        return children;
    }
}

export default ErrorBoundary;

// export default withTranslation()(ErrorBoundary); - для интернационализации ошибок
