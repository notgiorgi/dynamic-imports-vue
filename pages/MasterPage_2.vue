<script>
import Header from 'CustomComponent/Header';
import Content from 'CustomComponent/Content';
import Footer from 'CustomComponent/Footer';

  export default {
    props: ["pageData"],
    components: {
      Header,
      Content,
      Footer,
    },
    computed: {
      HeaderData() {
        return this.pageData.section_data.find(
          section => section.section_id === 1
        );
      },
      ContentData() {
        return this.pageData.section_data.find(
          section => section.section_id === 3
        );
      },
      FooterData() {
        return this.pageData.section_data.find(
          section => section.section_id === 2
        );
      },
    },
    render(h) {
      return h("div", [
        h('h1', ["Welcome to " + this.pageData.name + " Page"]),
        h("Header", {
          props: {
            ...this.HeaderData
          }
        }),
        h("Content", {
          props: {
            ...this.ContentData
          }
        }),
        h("Footer", {
          props: {
            ...this.FooterData
          }
        }),
      ]);
    }
  };
</script>