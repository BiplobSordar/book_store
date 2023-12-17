export type PublisherState = {
  errors?: {
    name?: string[];
    email?: string[];
    phone?: string[];
  };
  message?: string | null;
};
