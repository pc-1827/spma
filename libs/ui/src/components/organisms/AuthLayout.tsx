import { BaseComponent } from '@foundation/util/types'

export interface IAuthLayoutProps extends BaseComponent {
  title: string
}
export const AuthLayout = ({ title, children, className }: IAuthLayoutProps) => {
  return (
    <div className="flex items-start justify-center min-h-screen">
      <div className="w-full max-w-md p-4 mt-12 border rounded shadow-xl bg-card text-card-foreground">
        <div className="mb-6 text-xl font-semibold">{title}</div>
        <div className={className}>{children}</div>
      </div>
    </div>
  );
};
