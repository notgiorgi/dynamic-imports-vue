<script>
const data = [
  {
    id: 1,
    name: "Homepage",
    path: "/",
    master_page_id: 1,
    section_data: [
      {
        section_id: 1,
        companyName: "Nomad"
      },
      {
        section_id: 2,
        copyright: "all rights reserved"
      }
    ]
  },
  {
    id: 2,
    name: "Rugged Case",
    path: "/products/rugged-case-airpods-black",
    master_page_id: 2,
    section_data: [
      {
        section_id: 1,
        companyName: "HelloNomad"
      },
      {
        section_id: 2,
        copyright: "all rights reserved (c) shogun"
      },
      {
        section_id: 3,
        text: "Rugged Case"
      }
    ]
  },
  {
    id: 2,
    name: "Third page",
    path: "/foo/bar",
    master_page_id: 2,
    section_data: [
      {
        section_id: 1,
        companyName: "Acme"
      },
      {
        section_id: 2,
        copyright: "COPY"
      },
      {
        section_id: 3,
        text: "FOOBAR"
      }
    ]
  }
];

export default {
  props: ["id"],
  computed: {
    pageData() {
      return data.find(page => page.id === this.id);
    }
  },
  data: function() {
    return {
      MasterPageComponent: null
    };
  },
  mounted() {
    import(`Page/MasterPage_${this.pageData.master_page_id}.vue`).then(
      module => {
        this.MasterPageComponent = module.default;
      }
    );
  },
  render(h) {
    return h(this.MasterPageComponent, {
      props: {
        pageData: this.pageData
      }
    });
  }
};
</script>