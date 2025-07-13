export interface IUser {
  email: string;
}

export interface IProduct {
  id: string;
  productName: string;
  description: string;
  price: number;
  stock: number;
  images: string[];
  categoryId: string;
  isDeleted: boolean;
  createdAt: string;
  updatedAt: string;
}

export interface LoginModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSwitchToRegister: () => void;
}
export interface RegisterModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSwitchToLogin: () => void;
}

export interface IPreventEvent {
  preventDefault: () => void;
}

export interface ILoginInputs {
  email: string;
  password: string;
}
export interface IRegisterInputs {
  fullName: string;
  email: string;
  password: string;
}
export interface IModalToggleProps {
  toggleModal: (action: string) => void;
}

export interface ICategoryProps {
    categoryName: string;
    createdAt: string;
    id: string;
    updatedAt: string;
}