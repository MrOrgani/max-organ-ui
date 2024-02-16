declare module "maxorgani" {
	interface ButtonProps
		extends React.ButtonHTMLAttributes<HTMLButtonElement>,
			VariantProps<typeof buttonVariants> {
		asChild?: boolean;
	}
	declare const Button: React.forwardRef<HTMLButtonElement, ButtonProps>;
}
