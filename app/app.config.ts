export default defineAppConfig({
  ui: {
   button:{
      slots: {
        base: ['rounded-full']
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
            title:'text-start',
            links: 'justify-start md:justify-end align-end',
            description: 'text-left max-w-[75ch]',
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
      ]
    },
    pageFeature: {
      slots: {
        root: 'border-t border-default pt-5',
        wrapper: '',
        title:'text-xl md:text-2xl',
        description: 'text-lg',
        leadingIcon:'text-3xl'
      }
    }
  }
})
