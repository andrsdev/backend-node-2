type APIResponse = {
  message: string;
  error?: boolean;
  data?: Record<string, unknown>;
};

export function buildResponse({ message, error = false, data }: APIResponse) {
  return {
    message,
    error,
    data,
  };
}
