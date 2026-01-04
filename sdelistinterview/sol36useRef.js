// useRef ek hook hai react ka jo bina re-rendeer trigger kre values ko change krne ke kaam me aata hai 
// it helps us to directlt manipulate DOM behaviour bina rerender trigger kiye 


// 1. Render (JSX → DOM mutations)
// 2. ✅ useLayoutEffect (sync, before paint)  ← Measure here!
// 3. Browser Paint (user sees screen)
// 4. ✅ useEffect (async, after paint)


// useLayoutEffect is sync and useEffect is async
// useLayoutEffect is used for dom measurements and before paint after DOM changes takes place and useEffect after paint 


// react fibre intordcued after react 16 is a new way of architecture which makes diffing algo pausable,prioritizable 


// csr me client side yani browser pe empty html aati hai fir react browser download krta hai and paints html 
// ssr me server se banke aati hai html 
// ssg me build time pe banti hai html and gets served in cdn 
// isr me ssr+ ssg build time pe banti hai html and gets served in cdn but refreshed in background 
