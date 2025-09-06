import{t as D,i as b,c as u,e as S,a as x,j as V,S as A,f as s}from"./iframe-PFBARcnl.js";import{c as d}from"./css-C_pJ_J0K.js";import{c as m,f as R}from"./Kbd-Czq9cEOx.js";import"./preload-helper-D9Z9MdNV.js";import"./create-recipe-B6K2Nja6.js";var G=D("<div>"),M=D("<div><div><h3>Image Validation Demo</h3><p>Started with <!> photos, filtering out invalid URLs..."),O=D("<div><div><div></div><p>Validating images..."),j=D("<div>✓ Showing <!> valid photos");const F={title:"Example/VirtualPhotoGrid",component:m,tags:["autodocs"],decorators:[r=>(()=>{var a=G();return b(a,u(r,{})),S(()=>s(a,d({m:4,bg:"base.100",borderRadius:"box",p:4}))),a})()]},g={render:()=>{const[r,a]=x(),h=Array.from({length:100},(e,t)=>({id:`photo-${t}`,url:`https://picsum.photos/300/200?random=${t}`,title:`Photo ${t+1}`,date:new Date(Date.now()-Math.random()*365*24*60*60*1e3).toLocaleDateString()}));return u(m,{photos:h,height:"500px",get selectedPhotoId(){return r()},onPhotoClick:e=>a(e.id),onPhotoDblClick:e=>console.log("Opening:",e.title)})}},v={render:()=>{const[r,a]=x(),h=Array.from({length:1e3},(e,t)=>({id:`photo-${t}`,url:`https://picsum.photos/300/200?random=${t}`,title:`Beautiful Landscape ${t+1}`,date:new Date(Date.now()-Math.random()*365*24*60*60*1e3).toLocaleDateString()}));return u(m,{photos:h,height:"600px",get selectedPhotoId(){return r()},onPhotoClick:e=>a(e.id),onPhotoDblClick:e=>console.log("Opening:",e.title)})}},P={render:()=>{const[r,a]=x(),h=Array.from({length:50},(e,t)=>({id:`photo-${t}`,url:`https://picsum.photos/300/200?random=${t+100}`,title:`Nature Photo ${t+1}`}));return u(m,{photos:h,height:"400px",columns:3,get selectedPhotoId(){return r()},onPhotoClick:e=>a(e.id)})}},f={render:()=>{const[r,a]=x(),h=[...Array.from({length:100},(t,i)=>({id:`valid-${i}`,url:`https://via.placeholder.com/300x200/0891b2/ffffff?text=Photo+${i+1}`,title:`Valid Photo ${i+1}`,date:new Date(Date.now()-Math.random()*30*24*60*60*1e3).toLocaleDateString()})),...Array.from({length:500},(t,i)=>({id:`github-${i}`,url:`https://avatars.githubusercontent.com/u/${i+1}?s=300`,title:`GitHub Avatar ${i+1}`,date:new Date(Date.now()-Math.random()*30*24*60*60*1e3).toLocaleDateString()})),{id:"invalid-1",url:"https://invalid-domain-that-does-not-exist.com/image.jpg",title:"Invalid Photo 1",date:new Date().toLocaleDateString()},{id:"invalid-2",url:"https://via.placeholder.com/invalid-endpoint",title:"Invalid Photo 2",date:new Date().toLocaleDateString()}],[e]=V(()=>h,R);return(()=>{var t=M(),i=t.firstChild,C=i.firstChild,$=C.nextSibling,k=$.firstChild,w=k.nextSibling;return w.nextSibling,b($,()=>h.length,w),b(t,u(A,{get fallback(){return(()=>{var o=O(),n=o.firstChild,c=n.firstChild,p=c.nextSibling;return S(l=>{var _=d({display:"flex",alignItems:"center",justifyContent:"center",height:"400px",bg:"base.200",borderRadius:"box"}),L=d({textAlign:"center"}),y=d({w:8,h:8,border:"2px solid",borderColor:"primary",borderTopColor:"transparent",borderRadius:"full",animation:"spin 1s linear infinite",mx:"auto",mb:2}),I=d({color:"content.neutral"});return _!==l.e&&s(o,l.e=_),L!==l.t&&s(n,l.t=L),y!==l.a&&s(c,l.a=y),I!==l.o&&s(p,l.o=I),l},{e:void 0,t:void 0,a:void 0,o:void 0}),o})()},get children(){return(()=>{const o=e();return[(()=>{var n=j(),c=n.firstChild,p=c.nextSibling;return p.nextSibling,b(n,()=>o?.length||0,p),S(()=>s(n,d({mb:2,fontSize:"sm",color:"success"}))),n})(),u(m,{photos:o||[],height:"400px",get selectedPhotoId(){return r()},onPhotoClick:n=>a(n.id),onPhotoDblClick:n=>console.log("Opening valid photo:",n.title)})]})()}}),null),S(o=>{var n=d({mb:4,p:3,bg:"base.200",borderRadius:"box"}),c=d({fontWeight:"bold",mb:2}),p=d({fontSize:"sm",color:"content.neutral"});return n!==o.e&&s(i,o.e=n),c!==o.t&&s(C,o.t=c),p!==o.a&&s($,o.a=p),o},{e:void 0,t:void 0,a:void 0}),t})()}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [selectedPhoto, setSelectedPhoto] = createSignal<string | undefined>();
    const photos = Array.from({
      length: 100
    }, (_, i) => ({
      id: \`photo-\${i}\`,
      url: \`https://picsum.photos/300/200?random=\${i}\`,
      title: \`Photo \${i + 1}\`,
      date: new Date(Date.now() - Math.random() * 365 * 24 * 60 * 60 * 1000).toLocaleDateString()
    }));
    return <VirtualPhotoGrid photos={photos} height="500px" selectedPhotoId={selectedPhoto()} onPhotoClick={photo => setSelectedPhoto(photo.id)} onPhotoDblClick={photo => console.log("Opening:", photo.title)} />;
  }
}`,...g.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [selectedPhoto, setSelectedPhoto] = createSignal<string | undefined>();
    const photos = Array.from({
      length: 1000
    }, (_, i) => ({
      id: \`photo-\${i}\`,
      url: \`https://picsum.photos/300/200?random=\${i}\`,
      title: \`Beautiful Landscape \${i + 1}\`,
      date: new Date(Date.now() - Math.random() * 365 * 24 * 60 * 60 * 1000).toLocaleDateString()
    }));
    return <VirtualPhotoGrid photos={photos} height="600px" selectedPhotoId={selectedPhoto()} onPhotoClick={photo => setSelectedPhoto(photo.id)} onPhotoDblClick={photo => console.log("Opening:", photo.title)} />;
  }
}`,...v.parameters?.docs?.source}}};P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [selectedPhoto, setSelectedPhoto] = createSignal<string | undefined>();
    const photos = Array.from({
      length: 50
    }, (_, i) => ({
      id: \`photo-\${i}\`,
      url: \`https://picsum.photos/300/200?random=\${i + 100}\`,
      title: \`Nature Photo \${i + 1}\`
    }));
    return <VirtualPhotoGrid photos={photos} height="400px" columns={3} selectedPhotoId={selectedPhoto()} onPhotoClick={photo => setSelectedPhoto(photo.id)} />;
  }
}`,...P.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [selectedPhoto, setSelectedPhoto] = createSignal<string | undefined>();

    // Mix of valid and invalid URLs to demonstrate filtering
    const allPhotos = [...Array.from({
      length: 100
    }, (_, i) => ({
      id: \`valid-\${i}\`,
      url: \`https://via.placeholder.com/300x200/0891b2/ffffff?text=Photo+\${i + 1}\`,
      title: \`Valid Photo \${i + 1}\`,
      date: new Date(Date.now() - Math.random() * 30 * 24 * 60 * 60 * 1000).toLocaleDateString()
    })), ...Array.from({
      length: 500
    }, (_, i) => ({
      id: \`github-\${i}\`,
      url: \`https://avatars.githubusercontent.com/u/\${i + 1}?s=300\`,
      title: \`GitHub Avatar \${i + 1}\`,
      date: new Date(Date.now() - Math.random() * 30 * 24 * 60 * 60 * 1000).toLocaleDateString()
    })),
    // Add some invalid URLs to test filtering
    {
      id: "invalid-1",
      url: "https://invalid-domain-that-does-not-exist.com/image.jpg",
      title: "Invalid Photo 1",
      date: new Date().toLocaleDateString()
    }, {
      id: "invalid-2",
      url: "https://via.placeholder.com/invalid-endpoint",
      title: "Invalid Photo 2",
      date: new Date().toLocaleDateString()
    }];
    const [validatedPhotos] = createResource(() => allPhotos, filterValidImages);
    return <div>
        <div class={css({
        mb: 4,
        p: 3,
        bg: "base.200",
        borderRadius: "box"
      })}>
          <h3 class={css({
          fontWeight: "bold",
          mb: 2
        })}>
            Image Validation Demo
          </h3>
          <p class={css({
          fontSize: "sm",
          color: "content.neutral"
        })}>
            Started with {allPhotos.length} photos, filtering out invalid
            URLs...
          </p>
        </div>

        <Suspense fallback={<div class={css({
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "400px",
        bg: "base.200",
        borderRadius: "box"
      })}>
              <div class={css({
          textAlign: "center"
        })}>
                <div class={css({
            w: 8,
            h: 8,
            border: "2px solid",
            borderColor: "primary",
            borderTopColor: "transparent",
            borderRadius: "full",
            animation: "spin 1s linear infinite",
            mx: "auto",
            mb: 2
          })} />
                <p class={css({
            color: "content.neutral"
          })}>
                  Validating images...
                </p>
              </div>
            </div>}>
          {(() => {
          const photos = validatedPhotos();
          return <>
                <div class={css({
              mb: 2,
              fontSize: "sm",
              color: "success"
            })}>
                  ✓ Showing {photos?.length || 0} valid photos
                </div>
                <VirtualPhotoGrid photos={photos || []} height="400px" selectedPhotoId={selectedPhoto()} onPhotoClick={photo => setSelectedPhoto(photo.id)} onPhotoDblClick={photo => console.log("Opening valid photo:", photo.title)} />
              </>;
        })()}
        </Suspense>
      </div>;
  }
}`,...f.parameters?.docs?.source}}};const H=["Default","LargeGallery","FixedColumns","ValidatedPhotos"];export{g as Default,P as FixedColumns,v as LargeGallery,f as ValidatedPhotos,H as __namedExportsOrder,F as default};
