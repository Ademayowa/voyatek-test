import clsx from 'clsx';

type Props = {
  className?: string;
};

const Button = ({ className }: Props) => (
  <button
    type='button'
    className={clsx(
      'py-4 px-6 font-poppins font-medium text-[18px] text-primary bg-blue-gradient rounded-[10px] outline-none',
      className
    )}
  >
    Get Started
  </button>
);

export default Button;
