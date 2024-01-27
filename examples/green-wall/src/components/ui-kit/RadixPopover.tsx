import * as Popover from '@radix-ui/react-popover'

import { iconClose } from '~/components/icons'

export interface PopoverProps extends Popover.PopoverProps {
  title?: React.ReactNode
  content?: React.ReactNode
  popoverContentId?: string
}

export function RadixPopover(props: React.PropsWithChildren<PopoverProps>) {
  const { children, title, content, popoverContentId, ...popoverProps } = props

  return (
    <div className="relative inline-block text-left">
      <Popover.Root {...popoverProps}>
        <Popover.Trigger asChild>{children}</Popover.Trigger>

        <Popover.Content
          align="center"
          className="
          radix-side-top:animate-slide-up radix-side-bottom:animate-slide-down
          shadow-overlay z-50 rounded-lg bg-white p-4
          "
          id={popoverContentId}
          sideOffset={4}
        >
          <Popover.Arrow className="fill-current text-white" />

          <div className="mb-2 flex items-center">
            <h3 className="text-main-500 min-h-[24px] flex-1 font-medium">{title}</h3>

            <Popover.Close aria-label="Close" className="ml-auto" title="Close">
              <span className="hover:bg-main-100/80 inline-flex items-center justify-center rounded p-[0.3rem] transition-colors duration-200">
                <span className="text-main-500 size-4">{iconClose}</span>
              </span>
            </Popover.Close>
          </div>

          {content}
        </Popover.Content>
      </Popover.Root>
    </div>
  )
}
