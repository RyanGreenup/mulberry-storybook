import{t as h,i as c,c as B,e as f,a as L,f as n,d as N}from"./iframe-PFBARcnl.js";import{c as t}from"./css-C_pJ_J0K.js";import{b as j}from"./Kbd-Czq9cEOx.js";import"./preload-helper-D9Z9MdNV.js";import"./create-recipe-B6K2Nja6.js";var E=h("<div>"),F=h("<div>Item "),P=h("<div><div></div><div><div>Contact </div><div>contact<!>@example.com"),V=h("<div><div></div><div><h3>Product </h3><p>High-quality product with amazing features</p><div><span>$</span><button>Add to Cart"),q=h("<div><div></div><div><div><span>Notification </span><span> min ago</span></div><p>This is a <!> notification with important information."),A=h("<div><div><label>Item Count: </label><input type=range min=2 max=100>"),D=h("<div>Item <!> of ");const J={title:"Example/VirtualList",component:j,tags:["autodocs"],decorators:[r=>(()=>{var a=E();return c(a,B(r,{})),f(()=>n(a,t({m:4,bg:"base.100",borderRadius:"box",p:4}))),a})()]},_={args:{count:()=>100,estimateSize:()=>45,renderItemCallback:r=>(()=>{var a=F();return a.firstChild,c(a,r,null),f(()=>n(a,t({p:2,borderBottom:"1px solid",borderColor:"base.300"}))),a})()}},I={args:{count:()=>1e3,height:"400px",estimateSize:()=>70,renderItemCallback:r=>(()=>{var a=P(),b=a.firstChild,u=b.nextSibling,d=u.firstChild;d.firstChild;var m=d.nextSibling,s=m.firstChild,o=s.nextSibling;return o.nextSibling,c(b,()=>String.fromCharCode(65+r%26)),c(d,r+1,null),c(m,r+1,o),f(i=>{var e=t({p:3,borderBottom:"1px solid",borderColor:"base.300",display:"flex",alignItems:"center",gap:3,bg:{base:"base.100",_hover:"base.200"},cursor:"pointer",transition:"all 0.2s ease"}),v=t({w:10,h:10,bg:"primary",borderRadius:"full",display:"flex",alignItems:"center",justifyContent:"center",color:"white",fontSize:"sm",fontWeight:"bold"}),g=t({fontWeight:"semibold",color:"base.content"}),p=t({fontSize:"sm",color:"content.neutral"});return e!==i.e&&n(a,i.e=e),v!==i.t&&n(b,i.t=v),g!==i.a&&n(d,i.a=g),p!==i.o&&n(m,i.o=p),i},{e:void 0,t:void 0,a:void 0,o:void 0}),a})()}},$={args:{count:()=>500,height:"500px",estimateSize:()=>120,renderItemCallback:r=>(()=>{var a=V(),b=a.firstChild,u=b.nextSibling,d=u.firstChild;d.firstChild;var m=d.nextSibling,s=m.nextSibling,o=s.firstChild;o.firstChild;var i=o.nextSibling;return c(d,r+1,null),c(o,()=>(r*10+99).toFixed(2),null),f(e=>{var v=t({p:4,borderBottom:"1px solid",borderColor:"base.300",display:"flex",gap:4,bg:{base:"base.100",_hover:"base.200"},cursor:"pointer",transition:"all 0.2s ease"}),g=t({w:20,h:20,bg:"accent",borderRadius:"box",flexShrink:0}),p=t({flex:1}),l=t({fontWeight:"bold",color:"base.content",mb:1}),x=t({fontSize:"sm",color:"content.neutral",mb:2}),C=t({display:"flex",justifyContent:"space-between",alignItems:"center"}),S=t({fontWeight:"bold",color:"success",fontSize:"lg"}),y=t({bg:"primary",color:"white",px:3,py:1,borderRadius:"field",fontSize:"sm",fontWeight:"medium",border:"none",cursor:"pointer",_hover:{opacity:.9}});return v!==e.e&&n(a,e.e=v),g!==e.t&&n(b,e.t=g),p!==e.a&&n(u,e.a=p),l!==e.o&&n(d,e.o=l),x!==e.i&&n(m,e.i=x),C!==e.n&&n(s,e.n=C),S!==e.s&&n(o,e.s=S),y!==e.h&&n(i,e.h=y),e},{e:void 0,t:void 0,a:void 0,o:void 0,i:void 0,n:void 0,s:void 0,h:void 0}),a})()}},z={args:{count:()=>200,height:"350px",estimateSize:()=>80,renderItemCallback:r=>{const b=["info","success","warning","error"][r%4];return(()=>{var u=q(),d=u.firstChild,m=d.nextSibling,s=m.firstChild,o=s.firstChild;o.firstChild;var i=o.nextSibling,e=i.firstChild,v=s.nextSibling,g=v.firstChild,p=g.nextSibling;return p.nextSibling,c(o,r+1,null),c(i,()=>Math.floor(r/10),e),c(v,b,p),f(l=>{var x=t({p:3,borderBottom:"1px solid",borderColor:"base.300",display:"flex",gap:3,bg:{base:"base.100",_hover:"base.200"},transition:"all 0.2s ease"}),C=t({w:3,h:"full",bg:`content.${b}`,borderRadius:"full",flexShrink:0}),S=t({flex:1}),y=t({display:"flex",justifyContent:"space-between",mb:1}),k=t({fontWeight:"semibold",color:"secondary"}),R=t({fontSize:"xs",color:"primary"}),W=t({fontSize:"sm",color:"base.content"});return x!==l.e&&n(u,l.e=x),C!==l.t&&n(d,l.t=C),S!==l.a&&n(m,l.a=S),y!==l.o&&n(s,l.o=y),k!==l.i&&n(o,l.i=k),R!==l.n&&n(i,l.n=R),W!==l.s&&n(v,l.s=W),l},{e:void 0,t:void 0,a:void 0,o:void 0,i:void 0,n:void 0,s:void 0}),u})()}}},w={render:()=>{const[r,a]=L(20);return(()=>{var b=A(),u=b.firstChild,d=u.firstChild;d.firstChild;var m=d.nextSibling;return c(d,r,null),m.$$input=s=>a(parseInt(s.target.value)),c(b,B(j,{count:r,height:"300px",renderItemCallback:s=>(()=>{var o=D(),i=o.firstChild,e=i.nextSibling;return e.nextSibling,c(o,s+1,e),c(o,r,null),f(()=>n(o,t({p:3,borderBottom:"1px solid",borderColor:"base.300",bg:{base:"base.100",_hover:"base.200"}}))),o})()}),null),f(s=>{var o=t({mb:4,p:4,bg:"base.200",borderRadius:"box"}),i=t({display:"block",mb:2,fontWeight:"semibold"}),e=t({w:"full",h:2,bg:"base.300",borderRadius:"full",appearance:"none",cursor:"pointer"});return o!==s.e&&n(u,s.e=o),i!==s.t&&n(d,s.t=i),e!==s.a&&n(m,s.a=e),s},{e:void 0,t:void 0,a:void 0}),f(()=>m.value=r()),b})()}};_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  args: {
    count: () => 100,
    estimateSize: () => 45,
    renderItemCallback: (index: number) => <div class={css({
      p: 2,
      borderBottom: "1px solid",
      borderColor: "base.300"
    })}>
        Item {index}
      </div>
  }
}`,..._.parameters?.docs?.source}}};I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
  args: {
    count: () => 1000,
    height: "400px",
    estimateSize: () => 70,
    renderItemCallback: (index: number) => <div class={css({
      p: 3,
      borderBottom: "1px solid",
      borderColor: "base.300",
      display: "flex",
      alignItems: "center",
      gap: 3,
      bg: {
        base: "base.100",
        _hover: "base.200"
      },
      cursor: "pointer",
      transition: "all 0.2s ease"
    })}>
        <div class={css({
        w: 10,
        h: 10,
        bg: "primary",
        borderRadius: "full",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        color: "white",
        fontSize: "sm",
        fontWeight: "bold"
      })}>
          {String.fromCharCode(65 + index % 26)}
        </div>
        <div>
          <div class={css({
          fontWeight: "semibold",
          color: "base.content"
        })}>
            Contact {index + 1}
          </div>
          <div class={css({
          fontSize: "sm",
          color: "content.neutral"
        })}>
            contact{index + 1}@example.com
          </div>
        </div>
      </div>
  }
}`,...I.parameters?.docs?.source}}};$.parameters={...$.parameters,docs:{...$.parameters?.docs,source:{originalSource:`{
  args: {
    count: () => 500,
    height: "500px",
    estimateSize: () => 120,
    renderItemCallback: (index: number) => <div class={css({
      p: 4,
      borderBottom: "1px solid",
      borderColor: "base.300",
      display: "flex",
      gap: 4,
      bg: {
        base: "base.100",
        _hover: "base.200"
      },
      cursor: "pointer",
      transition: "all 0.2s ease"
    })}>
        <div class={css({
        w: 20,
        h: 20,
        bg: "accent",
        borderRadius: "box",
        flexShrink: 0
      })} />
        <div class={css({
        flex: 1
      })}>
          <h3 class={css({
          fontWeight: "bold",
          color: "base.content",
          mb: 1
        })}>
            Product {index + 1}
          </h3>
          <p class={css({
          fontSize: "sm",
          color: "content.neutral",
          mb: 2
        })}>
            High-quality product with amazing features
          </p>
          <div class={css({
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center"
        })}>
            <span class={css({
            fontWeight: "bold",
            color: "success",
            fontSize: "lg"
          })}>
              \${(index * 10 + 99).toFixed(2)}
            </span>
            <button class={css({
            bg: "primary",
            color: "white",
            px: 3,
            py: 1,
            borderRadius: "field",
            fontSize: "sm",
            fontWeight: "medium",
            border: "none",
            cursor: "pointer",
            _hover: {
              opacity: 0.9
            }
          })}>
              Add to Cart
            </button>
          </div>
        </div>
      </div>
  }
}`,...$.parameters?.docs?.source}}};z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`{
  args: {
    count: () => 200,
    height: "350px",
    estimateSize: () => 80,
    renderItemCallback: (index: number) => {
      const types = ["info", "success", "warning", "error"];
      const type = types[index % 4];
      return <div class={css({
        p: 3,
        borderBottom: "1px solid",
        borderColor: "base.300",
        display: "flex",
        gap: 3,
        bg: {
          base: "base.100",
          _hover: "base.200"
        },
        transition: "all 0.2s ease"
      })}>
          <div class={css({
          w: 3,
          h: "full",
          bg: \`content.\${type}\`,
          borderRadius: "full",
          flexShrink: 0
        })} />
          <div class={css({
          flex: 1
        })}>
            <div class={css({
            display: "flex",
            justifyContent: "space-between",
            mb: 1
          })}>
              <span class={css({
              fontWeight: "semibold",
              color: "secondary"
            })}>
                Notification {index + 1}
              </span>
              <span class={css({
              fontSize: "xs",
              color: "primary"
            })}>
                {Math.floor(index / 10)} min ago
              </span>
            </div>
            <p class={css({
            fontSize: "sm",
            color: "base.content"
          })}>
              This is a {type} notification with important information.
            </p>
          </div>
        </div>;
    }
  }
}`,...z.parameters?.docs?.source}}};w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [count, setCount] = createSignal(20);
    return <div>
        <div class={css({
        mb: 4,
        p: 4,
        bg: "base.200",
        borderRadius: "box"
      })}>
          <label class={css({
          display: "block",
          mb: 2,
          fontWeight: "semibold"
        })}>
            Item Count: {count()}
          </label>
          <input type="range" min="2" max="100" value={count()} onInput={e => setCount(parseInt(e.target.value))} class={css({
          w: "full",
          h: 2,
          bg: "base.300",
          borderRadius: "full",
          appearance: "none",
          cursor: "pointer"
        })} />
        </div>
        <VirtualList count={count} height="300px" renderItemCallback={(index: number) => <div class={css({
        p: 3,
        borderBottom: "1px solid",
        borderColor: "base.300",
        bg: {
          base: "base.100",
          _hover: "base.200"
        }
      })}>
              Item {index + 1} of {count()}
            </div>} />
      </div>;
  }
}`,...w.parameters?.docs?.source}}};N(["input"]);const K=["Default","ContactList","ProductCatalog","NotificationFeed","ReactiveSlider"];export{I as ContactList,_ as Default,z as NotificationFeed,$ as ProductCatalog,w as ReactiveSlider,K as __namedExportsOrder,J as default};
