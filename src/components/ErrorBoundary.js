import { Component } from 'react';

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    console.log(error);
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    console.log(error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div>
          <h1 className="text-xl">{this.state.error.name || 'Something went wrong.'}</h1>
          <div>
            {this.state.error.message || ''}
          </div>
          <div>
            {this.state.error.componentStack || null}
          </div>
        </div>
      );
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
