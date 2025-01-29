import { ReactNode } from 'react';

declare global {
  namespace Model {
    type Region = {
      numeric: string | null;
      name: string | null;
      alpha2: string | null;
      alpha3: string | null;
    };

    type Project = {
      id?: number | null;
      company?: string | null;
      name?: string | null;
      start?: string | null;
      end?: string | null;
      tech?: [] | null;
      description?: string | null;
      task?: string | null;
      jobdesk?: string | null;
      file?: string | null;
      link?: string | null;
      confidential?: boolean | null;
      featured?: boolean | null;
      region?: Region;
    };

    type Employment = {
      location: string;
      location_type: string;
      status: string;
      start: string;
      end: string;
    };

    type Experience = {
      id: 0;
      file: string;
      name: string;
      description: string;
      position: string[];
      start: string;
      end: string;
      link: string;
      show: boolean;
      employment_type: Employment[];
    };

    type Education = {
      id: number;
      name: string;
      year: string;
      major?: string | null;
      link: string;
      show: boolean;
    };

    type SNS = {
      name: string;
      link: string;
      show: boolean;
    };
  }

  namespace Component {
    type Badge = {
      variant?: 'default' | 'success' | 'danger' | 'info' | 'link' | 'warning';
      onClick?: () => void;
      children: ReactNode;
    };

    type Button = {
      variant?: 'default' | 'success' | 'info' | 'danger' | 'warning' | 'link' | 'ghost';
      outline?: boolean;
      onClick?: () => void;
      children: ReactNode;
      className?: string;
      disabled?: boolean;
      loading?: boolean;
    };

    type Card = {
      children: ReactNode;
      onClick?: () => void;
      className?: string;
    };

    type Modal = {
      title?: ReactNode;
      children?: ReactNode;
      footer?: ReactNode;
      toggle: () => void;
      open: boolean;
      size?: 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl' | 'full';
      fullScreen?: boolean;
      scrollable?: boolean;
      onOK?: () => void;
      okText?: string;
      onCancel?: () => void;
      cancelText?: string;
      loading?: boolean;
      closeOnEsc?: boolean;
      closeOnClickBackdrop?: boolean;
      className?: string;
      headerClassName?: string;
      bodyClassName?: string;
      footerClassName?: string;
      onOpen?: () => void;
      onClosed?: () => void;
    };

    type Particles = {
      className?: string;
      quantity?: number;
      staticity?: number;
      ease?: number;
      refresh?: boolean;
    };
  }
}

export {};
