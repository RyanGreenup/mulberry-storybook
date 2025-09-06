import{k as ne,m as M,c as e,a as J,o as te,g as re,l as ae,t as p,i as h,e as m,n as q,h as oe,f as s}from"./iframe-PFBARcnl.js";import{s as ie,g as se,d as le,u as de,e as ce,I as G,h as F,D as he,N as ge,R as ue,i as me,j as T,k as P,l as y,m as x,H as $,n as S,o as Q,p as C,L as w,q as X,r as O,c as pe,t as Y,v as ve,w as be,x as ye,y as fe,z as Se,A as Ce,C as we}from"./Kbd-Czq9cEOx.js";import{h as _e,p as Ne,c as t}from"./css-C_pJ_J0K.js";import"./preload-helper-D9Z9MdNV.js";import"./create-recipe-B6K2Nja6.js";const U={transform(n){const{inline:r,...i}=n;return{display:r?"inline-flex":"flex",alignItems:"center",justifyContent:"center",...i}}},Pe=(n={})=>{const r=_e(U,n);return U.transform(r,Ne)},xe=function(r){const[i,a]=ne(r,["inline"]),o=Pe(i),c=M(o,a);return e(ie.div,c)};function Z(n){const[r,i]=J(!1),a=()=>({stepSize:20,enabled:!0,...n}),o=()=>{const g=document.getElementById(ce("drawer"));g&&!g.checked&&(g.checked=!0)},c=g=>{const v=a();if(!v.enabled)return;v.autoOpen&&v.autoOpen()&&o(),v.onResizeStart?.();const D=se(v.cssVariable,v.defaultWidth),B=g==="increase"?v.stepSize:-v.stepSize,_=le(D+B,v.minWidth,v.maxWidth);_!==D&&(de(v.cssVariable,_),v.onResize?.(_))},u=g=>{a().enabled&&g.altKey&&!g.ctrlKey&&!g.metaKey&&!g.shiftKey&&(g.code==="BracketLeft"?(g.preventDefault(),c("decrease"),i(!0)):g.code==="BracketRight"&&(g.preventDefault(),c("increase"),i(!0)))},d=g=>{(g.code==="BracketLeft"||g.code==="BracketRight")&&i(!1)};return te(()=>{document.addEventListener("keydown",u),document.addEventListener("keyup",d),re(()=>{r()?document.documentElement.setAttribute("data-resizing","true"):document.documentElement.removeAttribute("data-resizing")}),ae(()=>{document.removeEventListener("keydown",u),document.removeEventListener("keyup",d),document.documentElement.removeAttribute("data-resizing")})}),{isActive:r,resize:c}}var De=[["line",{x1:"4",x2:"20",y1:"12",y2:"12",key:"1e0a9i"}],["line",{x1:"4",x2:"20",y1:"6",y2:"6",key:"1owob3"}],["line",{x1:"4",x2:"20",y1:"18",y2:"18",key:"yk5zj1"}]],Me=n=>e(G,M(n,{iconNode:De,name:"menu"})),$e=Me,Be=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M3 15h18",key:"5xshup"}]],Le=n=>e(G,M(n,{iconNode:Be,name:"panel-bottom"})),We=Le,ze=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M9 3v18",key:"fh3hqa"}]],ke=n=>e(G,M(n,{iconNode:ze,name:"panel-left"})),Ae=ke,Ie=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M15 3v18",key:"14nvp0"}]],Ee=n=>e(G,M(n,{iconNode:Ie,name:"panel-right"})),Re=Ee,He=p('<svg fill=none viewBox="0 0 18 18"><path stroke=currentColor stroke-linecap=round stroke-linejoin=round stroke-width=2 d="M9 1v16M1 9h16">'),j=p("<div>"),Ge=p("<div><div><div></div><div></div><div>"),Te=p("<div><div></div><div>"),Ve=p("<span>Sidebar"),Fe=p("<span>Navbar"),Ke=p("<span>Right"),Oe=p("<span>Bottom");const b={1:t({bg:"red.600/50"}),2:t({bg:"blue.600/50"}),3:t({bg:"green.600/50"}),4:t({bg:"yellow.600/50"}),5:t({bg:"purple.600/50"}),6:t({bg:"pink.600/50"}),7:t({bg:"cyan.600/50"}),8:t({bg:"orange.600/50"}),9:t({bg:"lime.600/50"}),10:t({bg:"indigo.600/50"}),11:t({bg:"teal.600/50"}),12:t({bg:"rose.600/50"})},K=({width:n="3.5"}={})=>(()=>{var r=He();return m(()=>oe(r,"class",t({w:n,h:n}))),r})(),l=({height:n="28",width:r})=>(()=>{var i=j();return h(i,e(K,{})),m(()=>s(i,t({display:"flex",alignItems:"center",justifyContent:"center",height:n,width:r,rounded:"lg",_hover:{bg:"primary/30",transform:"scale(1.05) rotate(2deg)"},bg:"primary/10",transition:"background 0.3s ease, transform 0.3s ease-in-out",color:"base.content",fontSize:"2xl",borderWidth:"1px",borderColor:"primary/50"}))),i})(),N=n=>{const{long:r=!1}=n;return(()=>{var i=Ge(),a=i.firstChild,o=a.firstChild,c=o.nextSibling,u=c.nextSibling;return h(o,e(l,{height:"24"}),null),h(o,e(l,{height:"24"}),null),h(o,e(l,{height:"24"}),null),h(c,e(l,{height:"48"})),h(u,e(l,{}),null),h(u,e(l,{}),null),h(u,e(q,{when:r,get children(){return[e(l,{}),e(l,{})]}}),null),h(a,e(q,{when:r,get children(){var d=j();return h(d,e(l,{height:"48"})),m(()=>s(d,t({mb:"4",mt:"4"}))),d}}),null),m(d=>{var g=t({p:"4"}),v=t({p:"4",border:"2px dashed",borderColor:"gray.200",rounded:"lg"}),D=F({columns:3,gap:"4"}),B=t({mb:"4",mt:"4"}),_=F({columns:2,gap:"4"});return g!==d.e&&s(i,d.e=g),v!==d.t&&s(a,d.t=v),D!==d.a&&s(o,d.a=D),B!==d.o&&s(c,d.o=B),_!==d.i&&s(u,d.i=_),d},{e:void 0,t:void 0,a:void 0,o:void 0,i:void 0}),i})()},ee=()=>e(xe,{width:"full",height:"full",p:"4",get children(){var n=Te(),r=n.firstChild,i=r.nextSibling;return h(r,e(l,{height:"24"}),null),h(r,e(l,{height:"24"}),null),h(r,e(l,{height:"24"}),null),h(i,e(l,{height:"48"})),m(a=>{var o=t({p:"4",border:"2px dashed",borderColor:"gray.200",rounded:"lg",width:"100%",height:"100%"}),c=F({columns:3,gap:"4"}),u=t({mb:"4",mt:"4"});return o!==a.e&&s(n,a.e=o),c!==a.t&&s(r,a.t=c),u!==a.a&&s(i,a.a=u),a},{e:void 0,t:void 0,a:void 0}),n}}),R=()=>[e(l,{height:"20"}),e(l,{height:"32"}),e(l,{height:"20"}),e(l,{height:"24"})],f=({children:n})=>(()=>{var r=j();return h(r,n),m(()=>s(r,t({p:"4",display:"flex",flexDirection:"column",gap:"3",height:"100%"}))),r})(),H=()=>e(T,{get children(){return[e(he,{get children(){return[e($e,{size:20}),Ve()]}}),e(ge,{get children(){return[e(Ae,{size:20}),Fe()]}}),e(ue,{get children(){return[e(Re,{size:20}),Ke()]}}),e(me,{get children(){return[e(We,{size:20}),Oe()]}})]}});try{K.displayName="PlaceholderIcon",K.__docgenInfo={description:"",displayName:"PlaceholderIcon",props:{width:{defaultValue:{value:"3.5"},description:"",name:"width",required:!1,type:{name:"string"}}}}}catch{}try{l.displayName="ContentPlaceholder",l.__docgenInfo={description:"",displayName:"ContentPlaceholder",props:{height:{defaultValue:{value:"28"},description:"",name:"height",required:!1,type:{name:"string"}},width:{defaultValue:{value:"3.5"},description:"",name:"width",required:!1,type:{name:"string"}}}}}catch{}try{N.displayName="MainContentPlaceholder",N.__docgenInfo={description:"",displayName:"MainContentPlaceholder",props:{long:{defaultValue:null,description:"",name:"long",required:!1,type:{name:"boolean"}}}}}catch{}try{f.displayName="SidebarContainer",f.__docgenInfo={description:"",displayName:"SidebarContainer",props:{}}}catch{}var je=p("<div>Layout Component - Use individual stories to see compositions"),V=p("<div>"),qe=p("<div><h1>Welcome to the App</h1><p>This is a minimal layout with just navbar and main content."),Ue=p("<span>Dashboard"),Je=p("<div>Navigation"),Qe=p("<span>Media Player"),Xe=p("<div><span>Now Playing"),Ye=p("<div><div></div><span>Brand"),Ze=p("<div><h1>Custom Branded Layout</h1><p>Example with custom navbar styling and branding."),en=p("<span>Photo Gallery"),nn=p("<span> photos");const tn=()=>je(),dn={title:"Example/Layout/Compositions",component:tn,tags:["autodocs"],decorators:[n=>(()=>{var r=V();return h(r,e(n,{})),m(()=>s(r,t({m:4,minHeight:"90vh"}))),r})()]},L={render:()=>(Z({cssVariable:"--sizes-sidebar-width",minWidth:200,maxWidth:600,defaultWidth:320,stepSize:50}),e(w,{get children(){return[e(P,{get class(){return b[2]},get children(){return e(y,{get children(){return[e(x,{get children(){return e($,{name:"drawer"})}}),e(y,{get children(){return e(H,{})}}),e(O,{get children(){var n=V();return m(()=>s(n,Y({w:"8",h:"8",bgGradient:"to-r",gradientFrom:"primary",gradientTo:"secondary"}))),n}})]}})}}),e(S,{get class(){return t({border:"4px solid orange"})},get children(){return[e(Q,{get class(){return b[4]},get children(){return e(f,{get children(){return e(R,{})}})}}),e(C,{get class(){return b[5]},get children(){return e(N,{})}}),e(ve,{get class(){return b[6]},get children(){return e(f,{get children(){return e(R,{})}})}}),e(be,{get class(){return b[7]},get children(){return e(ee,{})}})]}}),e(X,{get class(){return b[8]},get children(){return e(T,{get children(){return e(H,{})}})}})]}}))},W={render:()=>(Z({cssVariable:"--sizes-sidebar-width",minWidth:200,maxWidth:600,defaultWidth:320,stepSize:50}),e(w,{get children(){return[e(ye,{get children(){return e(y,{get children(){return[e(x,{get children(){return e($,{name:"drawer"})}}),e(y,{get children(){return e(H,{})}}),e(O,{get children(){var n=V();return m(()=>s(n,Y({w:"8",h:"8",bgGradient:"to-r",gradientFrom:"primary",gradientTo:"secondary"}))),n}})]}})}}),e(S,{get children(){return[e(fe,{get children(){return e(f,{get children(){return e(R,{})}})}}),e(C,{get children(){return e(N,{})}}),e(Se,{get children(){return e(f,{get children(){return e(R,{})}})}}),e(Ce,{get class(){return b[7]},get children(){return e(ee,{})}})]}}),e(we,{get children(){return e(T,{get children(){return e(H,{})}})}})]}}))},z={render:()=>e(w,{get children(){return[e(P,{get class(){return b[2]}}),e(S,{get children(){return e(C,{get class(){return t({p:"6"})},get children(){var n=qe(),r=n.firstChild,i=r.nextSibling;return m(a=>{var o=t({textAlign:"center",py:"20"}),c=t({fontSize:"3xl",fontWeight:"bold",mb:4}),u=t({color:"gray.600"});return o!==a.e&&s(n,a.e=o),c!==a.t&&s(r,a.t=c),u!==a.a&&s(i,a.a=u),a},{e:void 0,t:void 0,a:void 0}),n}})}})]}})},k={render:()=>e(w,{get children(){return[e(P,{get class(){return b[2]},get children(){return e(y,{get children(){return e(x,{get children(){return[e($,{name:"drawer"}),(()=>{var n=Ue();return m(()=>s(n,t({ml:2,fontWeight:"bold"}))),n})()]}})}})}}),e(S,{get children(){return[e(Q,{get class(){return b[4]},get children(){return e(f,{get children(){return[(()=>{var n=Je();return m(()=>s(n,t({p:2,fontWeight:"bold",borderBottom:"1px solid",borderColor:"gray.200"}))),n})(),e(l,{height:"16"}),e(l,{height:"16"}),e(l,{height:"16"})]}})}}),e(C,{get class(){return t({p:"6"})},get children(){return e(N,{})}})]}})]}})},A={render:()=>e(w,{get children(){return[e(P,{get class(){return b[2]},get children(){return e(y,{get children(){return e(x,{get children(){return[e($,{name:"drawer"}),(()=>{var n=Qe();return m(()=>s(n,t({ml:2,fontWeight:"bold"}))),n})()]}})}})}}),e(S,{get children(){return e(C,{get class(){return t({p:"6"})},get children(){return e(N,{})}})}}),e(X,{get class(){return b[8]},get children(){return e(T,{get children(){return[(()=>{var n=Xe(),r=n.firstChild;return h(n,e(l,{height:"10",width:"10"}),r),m(i=>{var a=t({display:"flex",alignItems:"center",gap:2}),o=t({fontSize:"sm"});return a!==i.e&&s(n,i.e=a),o!==i.t&&s(r,i.t=o),i},{e:void 0,t:void 0}),n})(),(()=>{var n=V();return h(n,e(l,{height:"8",width:"8"}),null),h(n,e(l,{height:"8",width:"8"}),null),h(n,e(l,{height:"8",width:"8"}),null),m(()=>s(n,t({display:"flex",gap:2}))),n})()]}})}})]}})},I={render:()=>{const n=t.raw({bgGradient:"to-r",gradientFrom:"primary",gradientTo:"secondary"});return e(w,{get children(){return[e(P,{get class(){return t(n)},get children(){return e(y,{get children(){return e(x,{get children(){return[e($,{name:"DISABLED"}),(()=>{var r=Ye(),i=r.firstChild,a=i.nextSibling;return m(o=>{var c=t({ml:3,display:"flex",alignItems:"center",gap:2}),u=t({w:8,h:8,bg:"white",rounded:"full"}),d=t({fontWeight:"bold",fontSize:"lg"});return c!==o.e&&s(r,o.e=c),u!==o.t&&s(i,o.t=u),d!==o.a&&s(a,o.a=d),o},{e:void 0,t:void 0,a:void 0}),r})()]}})}})}}),e(S,{get children(){return e(C,{get class(){return t({p:"6"})},get children(){var r=Ze(),i=r.firstChild,a=i.nextSibling;return m(o=>{var c=t({textAlign:"center",py:"20"}),u=t(t.raw({fontSize:"3xl",fontWeight:"bold",mb:4,backgroundClip:"text",color:"transparent"}),n),d=t({color:"gray.600"});return c!==o.e&&s(r,o.e=c),u!==o.t&&s(i,o.t=u),d!==o.a&&s(a,o.a=d),o},{e:void 0,t:void 0,a:void 0}),r}})}})]}})}},E={render:()=>{const[n,r]=J(),i=Array.from({length:1e3},(a,o)=>({id:`photo-${o}`,url:`https://picsum.photos/300/200?random=${o}`,title:`Photo ${o+1}`,date:new Date(Date.now()-Math.random()*365*24*60*60*1e3).toLocaleDateString()}));return e(w,{get children(){return[e(P,{get class(){return t({bg:"base.200",borderBottom:"1px solid",borderColor:"base.300"})},get children(){return e(y,{get children(){return[e(x,{get children(){var a=en();return m(()=>s(a,t({fontWeight:"bold",fontSize:"lg"}))),a}}),e(O,{get children(){var a=nn(),o=a.firstChild;return h(a,()=>i.length,o),m(()=>s(a,t({fontSize:"sm",color:"content.neutral"}))),a}})]}})}}),e(S,{get children(){return e(C,{get class(){return t({p:0})},get children(){return e(pe,{photos:i,height:"calc(100vh - 80px)",get selectedPhotoId(){return n()},onPhotoClick:a=>r(a.id),onPhotoDblClick:a=>{console.log("Opening photo:",a.title),r(a.id)}})}})}})]}})}};L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`{
  render: () => {
    const {
      isActive
    } = useResizeKeybindings({
      cssVariable: "--sizes-sidebar-width",
      minWidth: 200,
      maxWidth: 600,
      defaultWidth: 320,
      stepSize: 50
    });
    return <LayoutContainer>
        <Navbar class={colors[2]}>
          <NavbarContent>
            <NavbarStart>
              <HamburgerIcon name="drawer" />
            </NavbarStart>
            <NavbarContent>
              <LayoutButtons />
            </NavbarContent>
            <NavbarEnd>
              <div class={circle({
              w: "8",
              h: "8",
              bgGradient: "to-r",
              gradientFrom: "primary",
              gradientTo: "secondary"
            })}></div>
            </NavbarEnd>
          </NavbarContent>
        </Navbar>
        <MainArea class={css({
        border: "4px solid orange"
      })}>
          <Sidebar class={colors[4]}>
            <SidebarContainer>
              <SidebarPlaceHolder />
            </SidebarContainer>
          </Sidebar>
          <Main class={colors[5]}>
            <MainContentPlaceholder />
          </Main>
          <RightSidebar class={colors[6]}>
            <SidebarContainer>
              <SidebarPlaceHolder />
            </SidebarContainer>
          </RightSidebar>
          <BtmDrawer class={colors[7]}>
            <DrawerPlaceHolder />
          </BtmDrawer>
        </MainArea>
        <BtmDash class={colors[8]}>
          <BtmDashContainer>
            <LayoutButtons />
          </BtmDashContainer>
        </BtmDash>
      </LayoutContainer>;
  }
}`,...L.parameters?.docs?.source}}};W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`{
  render: () => {
    const {
      isActive
    } = useResizeKeybindings({
      cssVariable: "--sizes-sidebar-width",
      minWidth: 200,
      maxWidth: 600,
      defaultWidth: 320,
      stepSize: 50
    });
    return <LayoutContainer>
        <NavbarStyled>
          <NavbarContent>
            <NavbarStart>
              <HamburgerIcon name="drawer" />
            </NavbarStart>
            <NavbarContent>
              <LayoutButtons />
            </NavbarContent>
            <NavbarEnd>
              <div class={circle({
              w: "8",
              h: "8",
              bgGradient: "to-r",
              gradientFrom: "primary",
              gradientTo: "secondary"
            })}></div>
            </NavbarEnd>
          </NavbarContent>
        </NavbarStyled>
        <MainArea>
          <SidebarStyled>
            <SidebarContainer>
              <SidebarPlaceHolder />
            </SidebarContainer>
          </SidebarStyled>
          <Main>
            <MainContentPlaceholder />
          </Main>
          {/* TODO RightSidebar should be renamed as RightDrawer */}
          <RightDrawerStyled>
            <SidebarContainer>
              <SidebarPlaceHolder />
            </SidebarContainer>
          </RightDrawerStyled>
          <BtmDrawerStyled class={colors[7]}>
            <DrawerPlaceHolder />
          </BtmDrawerStyled>
        </MainArea>
        <BtmDashStyled>
          <BtmDashContainer>
            <LayoutButtons />
          </BtmDashContainer>
        </BtmDashStyled>
      </LayoutContainer>;
  }
}`,...W.parameters?.docs?.source}}};z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`{
  render: () => <LayoutContainer>
      <Navbar class={colors[2]}></Navbar>
      <MainArea>
        <Main class={css({
        p: "6"
      })}>
          <div class={css({
          textAlign: "center",
          py: "20"
        })}>
            <h1 class={css({
            fontSize: "3xl",
            fontWeight: "bold",
            mb: 4
          })}>
              Welcome to the App
            </h1>
            <p class={css({
            color: "gray.600"
          })}>
              This is a minimal layout with just navbar and main content.
            </p>
          </div>
        </Main>
      </MainArea>
    </LayoutContainer>
}`,...z.parameters?.docs?.source}}};k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  render: () => <LayoutContainer>
      <Navbar class={colors[2]}>
        <NavbarContent>
          <NavbarStart>
            <HamburgerIcon name="drawer" />
            <span class={css({
            ml: 2,
            fontWeight: "bold"
          })}>Dashboard</span>
          </NavbarStart>
        </NavbarContent>
      </Navbar>
      <MainArea>
        <Sidebar class={colors[4]}>
          <SidebarContainer>
            <div class={css({
            p: 2,
            fontWeight: "bold",
            borderBottom: "1px solid",
            borderColor: "gray.200"
          })}>
              Navigation
            </div>
            <ContentPlaceholder height="16" />
            <ContentPlaceholder height="16" />
            <ContentPlaceholder height="16" />
          </SidebarContainer>
        </Sidebar>
        <Main class={css({
        p: "6"
      })}>
          <MainContentPlaceholder />
        </Main>
      </MainArea>
    </LayoutContainer>
}`,...k.parameters?.docs?.source}}};A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  render: () => <LayoutContainer>
      <Navbar class={colors[2]}>
        <NavbarContent>
          <NavbarStart>
            <HamburgerIcon name="drawer" />
            <span class={css({
            ml: 2,
            fontWeight: "bold"
          })}>Media Player</span>
          </NavbarStart>
        </NavbarContent>
      </Navbar>
      <MainArea>
        <Main class={css({
        p: "6"
      })}>
          <MainContentPlaceholder />
        </Main>
      </MainArea>
      <BtmDash class={colors[8]}>
        <BtmDashContainer>
          <div class={css({
          display: "flex",
          alignItems: "center",
          gap: 2
        })}>
            <ContentPlaceholder height="10" width="10" />
            <span class={css({
            fontSize: "sm"
          })}>Now Playing</span>
          </div>
          <div class={css({
          display: "flex",
          gap: 2
        })}>
            <ContentPlaceholder height="8" width="8" />
            <ContentPlaceholder height="8" width="8" />
            <ContentPlaceholder height="8" width="8" />
          </div>
        </BtmDashContainer>
      </BtmDash>
    </LayoutContainer>
}`,...A.parameters?.docs?.source}}};I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
  render: () => {
    const grad = css.raw({
      bgGradient: "to-r",
      gradientFrom: "primary",
      gradientTo: "secondary"
    });
    return <LayoutContainer>
        <Navbar class={css(grad)}>
          <NavbarContent>
            <NavbarStart>
              <HamburgerIcon name="DISABLED" />
              <div class={css({
              ml: 3,
              display: "flex",
              alignItems: "center",
              gap: 2
            })}>
                <div class={css({
                w: 8,
                h: 8,
                bg: "white",
                rounded: "full"
              })} />
                <span class={css({
                fontWeight: "bold",
                fontSize: "lg"
              })}>
                  Brand
                </span>
              </div>
            </NavbarStart>
          </NavbarContent>
        </Navbar>
        <MainArea>
          <Main class={css({
          p: "6"
        })}>
            <div class={css({
            textAlign: "center",
            py: "20"
          })}>
              <h1 class={css(css.raw({
              fontSize: "3xl",
              fontWeight: "bold",
              mb: 4,
              backgroundClip: "text",
              color: "transparent"
            }), grad)}>
                Custom Branded Layout
              </h1>
              <p class={css({
              color: "gray.600"
            })}>
                Example with custom navbar styling and branding.
              </p>
            </div>
          </Main>
        </MainArea>
      </LayoutContainer>;
  }
}`,...I.parameters?.docs?.source}}};E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [selectedPhoto, setSelectedPhoto] = createSignal<string | undefined>();

    // Generate demo photos from Lorem Picsum
    const photos = Array.from({
      length: 1000
    }, (_, i) => ({
      id: \`photo-\${i}\`,
      url: \`https://picsum.photos/300/200?random=\${i}\`,
      title: \`Photo \${i + 1}\`,
      date: new Date(Date.now() - Math.random() * 365 * 24 * 60 * 60 * 1000).toLocaleDateString()
    }));
    return <LayoutContainer>
        <Navbar class={css({
        bg: "base.200",
        borderBottom: "1px solid",
        borderColor: "base.300"
      })}>
          <NavbarContent>
            <NavbarStart>
              <span class={css({
              fontWeight: "bold",
              fontSize: "lg"
            })}>
                Photo Gallery
              </span>
            </NavbarStart>
            <NavbarEnd>
              <span class={css({
              fontSize: "sm",
              color: "content.neutral"
            })}>
                {photos.length} photos
              </span>
            </NavbarEnd>
          </NavbarContent>
        </Navbar>
        <MainArea>
          <Main class={css({
          p: 0
        })}>
            <VirtualPhotoGrid photos={photos} height="calc(100vh - 80px)" selectedPhotoId={selectedPhoto()} onPhotoClick={photo => setSelectedPhoto(photo.id)} onPhotoDblClick={photo => {
            console.log("Opening photo:", photo.title);
            setSelectedPhoto(photo.id);
          }} />
          </Main>
        </MainArea>
      </LayoutContainer>;
  }
}`,...E.parameters?.docs?.source}}};const cn=["FullLayout","StyledFullLayout","MinimalLayout","WithSidebar","WithBottomDash","CustomNavbar","PhotoGallery"];export{I as CustomNavbar,L as FullLayout,z as MinimalLayout,E as PhotoGallery,W as StyledFullLayout,A as WithBottomDash,k as WithSidebar,cn as __namedExportsOrder,dn as default};
