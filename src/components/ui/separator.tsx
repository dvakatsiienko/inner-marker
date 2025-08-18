/* Core */
import * as SeparatorPrimitive from '@radix-ui/react-separator';

/* Instruments */
import { cn } from '@/helpers/cn';

export const Separator = ({
  className,
  orientation = 'horizontal',
  decorative = true,
  ...props
}: React.ComponentProps<typeof SeparatorPrimitive.Root>) => {
  return (
    <SeparatorPrimitive.Root
      className={cn(
        'bg-border shrink-0 data-[orientation=horizontal]:h-px data-[orientation=horizontal]:w-full data-[orientation=vertical]:h-full data-[orientation=vertical]:w-px',
        className,
      )}
      data-slot='separator'
      decorative={decorative}
      orientation={orientation}
      {...props}
    />
  );
};
