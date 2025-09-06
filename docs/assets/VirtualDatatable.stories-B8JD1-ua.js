import{a as s,t as y,s as n,i as c,c as o,m as z,e as V,h as D}from"./iframe-PFBARcnl.js";import{V as d,a as S,P as F}from"./Kbd-Czq9cEOx.js";import"./preload-helper-D9Z9MdNV.js";import"./css-C_pJ_J0K.js";import"./create-recipe-B6K2Nja6.js";var w=y("<a style=text-decoration:none>"),C=y("<div><div style=margin-bottom:1.5rem><h1 style=font-size:1.5rem;font-weight:bold;margin-bottom:0.25rem>Employee Directory</h1><p>Virtualized table showing 1,000 employee records with full filtering and sorting</p></div><div>"),v=y("<div>");const h=t=>{const e=["Engineering","Sales","Marketing","HR","Finance","Operations"],r=["Active","Inactive","Pending","Suspended"];return Array.from({length:t},(l,a)=>({id:a+1,name:`Employee ${a+1}`,email:`employee${a+1}@company.com`,department:e[a%e.length],salary:Math.floor(Math.random()*1e5)+4e4,status:r[a%r.length],joinDate:new Date(2020+Math.floor(Math.random()*4),Math.floor(Math.random()*12),Math.floor(Math.random()*28)+1),performance:Math.floor(Math.random()*100)}))},$={Active:"success",Inactive:"neutral",Pending:"warning",Suspended:"error"},b=()=>[{accessorKey:"id",header:"ID",cell:t=>t.getValue(),size:80,filterFn:(t,e,r)=>t.getValue(e).toString().includes(r)},{accessorKey:"name",header:"Name",cell:t=>t.getValue(),size:180},{accessorKey:"email",header:"Email",cell:t=>(()=>{var e=w();return n(e,"color","var(--colors-primary)"),c(e,()=>t.getValue()),V(()=>D(e,"href",`mailto:${t.getValue()}`)),e})(),size:250},{accessorKey:"department",header:"Department",cell:t=>o(S,{get children(){return t.getValue()}}),size:130},{accessorKey:"salary",header:"Salary",cell:t=>`$${t.getValue().toLocaleString()}`,size:120,filterFn:(t,e,r)=>t.getValue(e).toString().includes(r)},{accessorKey:"status",header:"Status",cell:t=>{const e=t.getValue();return o(S,{get variant(){return $[e]},children:e})},size:120},{accessorKey:"performance",header:"Performance",cell:t=>{const e=t.getValue(),[r]=s(e),[l]=s(!0),a=i=>i>=80?"success":i>=60?"warning":"error";return o(F,{value:r,get variant(){return a(e)},showLabel:l,style:{width:"4rem"}})},size:150,filterFn:(t,e,r)=>t.getValue(e).toString().includes(r)},{accessorKey:"joinDate",header:"Join Date",cell:t=>t.getValue().toLocaleDateString(),size:120}],M={title:"DataTables/VirtualizedDataTable",component:d,parameters:{layout:"fullscreen"},tags:["autodocs"],argTypes:{enableGlobalFilter:{control:"boolean",description:"Enable global search filter"},enableColumnFilters:{control:"boolean",description:"Enable individual column filters"},enableSorting:{control:"boolean",description:"Enable column sorting"},searchPlaceholder:{control:"text",description:"Placeholder text for search input"},height:{control:"text",description:"Height of the virtualized container"},estimateSize:{description:"Function to estimate row size for virtualization"},overscan:{control:"number",description:"Number of items to render outside of visible area"}}},u={render:t=>{const[e]=s(h(1e3));return(()=>{var r=C(),l=r.firstChild,a=l.firstChild,i=a.nextSibling,f=l.nextSibling;return n(r,"padding","1.5rem"),n(a,"color","var(--colors-base-content)"),n(i,"color","var(--colors-base-content)"),n(i,"opacity","0.7"),n(f,"width","min-content"),n(f,"padding","1rem"),c(f,o(d,z(t,{get data(){return e()},get columns(){return b()}}))),r})()},args:{enableGlobalFilter:!0,enableColumnFilters:!0,enableSorting:!0,searchPlaceholder:"Search employees...",height:"650px",estimateSize:()=>56,overscan:15}},m={render:()=>{const[t]=s(h(100));return(()=>{var e=v();return n(e,"padding","1.5rem"),c(e,o(d,{get data(){return t()},get columns(){return b().slice(0,4)},enableGlobalFilter:!1,enableColumnFilters:!1,enableSorting:!1,height:"400px"})),e})()}},g={render:()=>{const[t]=s(h(500));return(()=>{var e=v();return n(e,"padding","1.5rem"),c(e,o(d,{get data(){return t()},get columns(){return b()},enableGlobalFilter:!0,enableColumnFilters:!1,enableSorting:!0,searchPlaceholder:"Search across all fields...",height:"500px"})),e})()}},p={render:()=>{const[t]=s(h(2e3));return(()=>{var e=v();return n(e,"padding","1.5rem"),c(e,o(d,{get data(){return t()},get columns(){return b()},enableGlobalFilter:!0,enableColumnFilters:!0,enableSorting:!0,height:"300px",estimateSize:()=>40,overscan:20})),e})()}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: args => {
    const [data] = createSignal(generateEmployeeData(1000));
    return <div style={{
      padding: "1.5rem"
    }}>
        <div style={{
        "margin-bottom": "1.5rem"
      }}>
          <h1 style={{
          "font-size": "1.5rem",
          "font-weight": "bold",
          color: "var(--colors-base-content)",
          "margin-bottom": "0.25rem"
        }}>
            Employee Directory
          </h1>
          <p style={{
          color: "var(--colors-base-content)",
          opacity: "0.7"
        }}>
            Virtualized table showing 1,000 employee records with full filtering
            and sorting
          </p>
        </div>

        <div style={{
        // TODO is there a better way to handle this, e.g. in the component?
        width: "min-content",
        padding: "1rem"
      }}>
          <VirtualizedDataTable {...args} data={data()} columns={getColumns()} />
        </div>
      </div>;
  },
  args: {
    enableGlobalFilter: true,
    enableColumnFilters: true,
    enableSorting: true,
    searchPlaceholder: "Search employees...",
    height: "650px",
    estimateSize: () => 56,
    overscan: 15
  }
}`,...u.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [data] = createSignal(generateEmployeeData(100));
    return <div style={{
      padding: "1.5rem"
    }}>
        <VirtualizedDataTable data={data()} columns={getColumns().slice(0, 4)} // Show fewer columns
      enableGlobalFilter={false} enableColumnFilters={false} enableSorting={false} height="400px" />
      </div>;
  }
}`,...m.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [data] = createSignal(generateEmployeeData(500));
    return <div style={{
      padding: "1.5rem"
    }}>
        <VirtualizedDataTable data={data()} columns={getColumns()} enableGlobalFilter={true} enableColumnFilters={false} enableSorting={true} searchPlaceholder="Search across all fields..." height="500px" />
      </div>;
  }
}`,...g.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [data] = createSignal(generateEmployeeData(2000));
    return <div style={{
      padding: "1.5rem"
    }}>
        <VirtualizedDataTable data={data()} columns={getColumns()} enableGlobalFilter={true} enableColumnFilters={true} enableSorting={true} height="300px" estimateSize={() => 40} // Smaller rows
      overscan={20} />
      </div>;
  }
}`,...p.parameters?.docs?.source}}};const T=["Default","BasicTable","WithGlobalSearchOnly","CompactView"];export{m as BasicTable,p as CompactView,u as Default,g as WithGlobalSearchOnly,T as __namedExportsOrder,M as default};
