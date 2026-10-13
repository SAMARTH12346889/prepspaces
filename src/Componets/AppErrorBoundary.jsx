import React from "react";
import Logo from "./Logo";
import { AlertCircle, RefreshCw, Home } from "lucide-react";

export default class AppErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    console.error("PrepSpaces UI caught an error:", error, errorInfo);
  }

  handleReset = () => {
    this.setState({ hasError: false, error: null });
    window.location.href = "/";
  };

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen bg-[#f6f4ee] text-[#18181b] flex items-center justify-center p-6 antialiased">
          <div className="relative z-10 max-w-md w-full rounded-3xl border border-[#e7e3da] bg-white/90 p-8 text-center shadow-lg backdrop-blur-xl">
            <div className="mb-6 flex justify-center">
              <Logo size="md" />
            </div>

            <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-orange-100 text-[#ea580c]">
              <AlertCircle size={28} />
            </div>

            <h2 className="text-xl font-bold text-[#18181b]">Something unexpected occurred</h2>
            <p className="mt-2 text-xs leading-relaxed text-stone-500">
              The page encountered a temporary display issue. You can safely return to the dashboard or refresh.
            </p>

            <div className="mt-6 flex flex-col gap-2.5">
              <button
                type="button"
                onClick={this.handleReset}
                className="flex w-full items-center justify-center gap-2 rounded-xl bg-[#f97316] py-3 text-xs font-bold text-white shadow-md transition hover:bg-[#ea580c] cursor-pointer"
              >
                <Home size={15} />
                <span>Return to Dashboard</span>
              </button>

              <button
                type="button"
                onClick={() => window.location.reload()}
                className="flex w-full items-center justify-center gap-2 rounded-xl border border-[#e7e3da] bg-white py-3 text-xs font-semibold text-stone-700 hover:border-orange-300 hover:text-[#f97316] transition cursor-pointer"
              >
                <RefreshCw size={14} />
                <span>Refresh Page</span>
              </button>
            </div>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}
