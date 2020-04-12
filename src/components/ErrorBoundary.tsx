import React, { ErrorInfo } from 'react';

export class ErrorBoundary extends React.Component<{}, { error: Error | boolean, info: ErrorInfo }> {
    constructor (props: any) {
        super(props);
        this.state = {
            error: false,
            info: { componentStack: '' },
        };
    }

    public componentDidCatch (error: Error, info: ErrorInfo) {
        this.setState({
            error,
            info,
        });
    }

    public render () {
        if (this.state.error) {
            return(
                <div>
                    <h5>We've encountered an error!</h5>
                    <details style={{ whiteSpace: 'pre-wrap' }}>
                        {this.state.info.componentStack}
                    </details>
                </div>
            );
        }

        return this.props.children;
    }
}
