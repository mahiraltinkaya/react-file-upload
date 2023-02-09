export interface ImageContainerProps {
  title?: string;
  allowedTypes?: string[];
  files: File[];
  setFiles: (files: File[]) => void;
  maxsize?: number;
  limit?: number;
  children?: React.ReactNode;
  multiple?: boolean;
}
