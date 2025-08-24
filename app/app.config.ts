export default defineAppConfig({
  ui: {
    colors: {
      neutral: 'stone'
    },
   button:{
      slots: {
        base: ['rounded-full']
      },
      variants: {
        size: {
          xl: {
            base: 'px-6 py-3 text-xl'
          }
        }
      }
    } 
  },
  uiPro:{
    pageSection: {
      slots: {
        wrapper: 'flex flex-wrap',
        links: '',
      },
      variants: {
        orientation:{
          vertical: {
            headline: 'justify-start',
            title:'text-start max-w-[560px] text-balance',
            links: 'justify-start md:justify-end align-end',
            description: 'text-left max-w-[75ch]',
          },
          horizontal: {
            root: 'bg-primary',
            headline: 'justify-end text-red',
          },
          accentdark:{
            container: 'lg:grid-cols-2 lg:items-center ',
            headline: 'justify-end text-white',
            description: 'text-pretty',
            features: 'gap-4 grid-cols-1 sm:grid-cols-2',
            root: 'bg-accented',
          }
        }
      },
      compoundVariants: [
        {
          orientation: 'vertical',
          title: true,
          class: {
            body: 'mt-16 order-none lg:order-last',
          }
        },
        {
          orientation: 'vertical',
          description: true,
          class: {
            body: 'mt-16'
          }
        },
        {
          orientation: 'vertical',
          body: true,
          class: {
            footer: 'mt-16 md:mt-auto grow'
          }
        },
        {
          orientation: 'horizontal',
          body: true,
          class: {
            body: 'order-none lg:order-none',
          }
        },
        {
          orientation: 'accentdark',
          body: true,
          class: {
            body: 'mt-0',
          }
        }
      ]
    },
    pageFeature: {
      slots: {
        root: 'border-t border-default pt-5',
        wrapper: '',
        title:'text-[1.35rem] ',
        description: 'text-lg',
        leadingIcon:'text-3xl'
      }
    }
  }
})
