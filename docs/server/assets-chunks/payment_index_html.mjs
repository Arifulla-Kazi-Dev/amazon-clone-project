export default `<!DOCTYPE html><html lang="en" data-beasties-container><head>
  <meta charset="utf-8">
  <title>AmazonClone</title>
  <base href="/amazon-clone-project/">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link rel="icon" type="image/x-icon" href="favicon.ico">
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css">

<style>:root{--amazon-orange: #ff9900;--amazon-dark-blue: #131a22;--amazon-light-blue: #232f3e;--amazon-gray: #f3f3f3;--amazon-text-color: #111;--amazon-light-text: #555}*{margin:0;padding:0;box-sizing:border-box;font-family:Arial,sans-serif}body{background-color:var(--amazon-gray);color:var(--amazon-text-color);font-size:14px;line-height:1.5}.navbar{background-color:var(--amazon-light-blue);padding:10px}.navbar a{color:#fff;padding:10px 15px;display:inline-block}.navbar a:hover{background-color:var(--amazon-dark-blue)}footer{background-color:var(--amazon-dark-blue);color:#fff;padding:20px;text-align:center}footer a{color:#fff;text-decoration:none}footer a:hover{text-decoration:underline}
</style><link rel="stylesheet" href="styles-CSTHODHL.css" media="print" onload="this.media='all'"><noscript><link rel="stylesheet" href="styles-CSTHODHL.css"></noscript><style ng-app-id="ng">.navbar[_ngcontent-ng-c1963281972]{display:flex;align-items:center;background-color:#131921;padding:10px 20px;color:#fff;justify-content:space-between}.navbar-logo[_ngcontent-ng-c1963281972]   a[_ngcontent-ng-c1963281972]{color:#fff;font-size:24px;font-weight:700;text-decoration:none;cursor:pointer}.navbar-search[_ngcontent-ng-c1963281972]{display:flex;align-items:center;width:60%;max-width:700px;background-color:#febd69;border-radius:4px;overflow:hidden;margin:0 20px}.search-category-dropdown[_ngcontent-ng-c1963281972]{height:36px;border:none;padding:0 10px;font-size:14px;background-color:#f3f3f3;color:#111;border-right:1px solid #ccc;cursor:pointer;outline:none}.navbar-search[_ngcontent-ng-c1963281972]   input[type=text][_ngcontent-ng-c1963281972]{width:100%;padding:8px;border:none;font-size:14px;outline:none}.navbar-search[_ngcontent-ng-c1963281972]   button[_ngcontent-ng-c1963281972]{background-color:#febd69;padding:0 16px;border:none;cursor:pointer;background-image:url(/assets/search-icon.svg);background-repeat:no-repeat;background-position:center;background-size:20px;width:45px}.navbar-links[_ngcontent-ng-c1963281972]{display:flex;list-style:none;gap:15px}.navbar-links[_ngcontent-ng-c1963281972]   li[_ngcontent-ng-c1963281972]{position:relative}.navbar-links[_ngcontent-ng-c1963281972]   a[_ngcontent-ng-c1963281972]{color:#fff;text-decoration:none;font-size:14px;cursor:pointer;padding:0 5px}.navbar-links[_ngcontent-ng-c1963281972]   a[_ngcontent-ng-c1963281972]:hover{color:#febd69;text-decoration:underline}.cart-icon[_ngcontent-ng-c1963281972]   img[_ngcontent-ng-c1963281972]{width:30px;height:30px}.cart-count[_ngcontent-ng-c1963281972]{background-color:#f08804;color:#fff;padding:2px 6px;border-radius:50%;font-size:12px;position:absolute;top:-5px;right:-10px}@media (max-width: 768px){.navbar[_ngcontent-ng-c1963281972]{flex-direction:column;align-items:flex-start;padding:15px}.navbar-logo[_ngcontent-ng-c1963281972]{margin-bottom:10px}.navbar-search[_ngcontent-ng-c1963281972]{width:100%;margin:10px 0}.navbar-links[_ngcontent-ng-c1963281972]{justify-content:center;flex-wrap:wrap;gap:10px}.navbar-links[_ngcontent-ng-c1963281972]   a[_ngcontent-ng-c1963281972]{font-size:12px}.cart-icon[_ngcontent-ng-c1963281972]{margin-top:10px}}@media (max-width: 480px){.navbar[_ngcontent-ng-c1963281972]{padding:10px}.navbar-logo[_ngcontent-ng-c1963281972]   a[_ngcontent-ng-c1963281972]{font-size:20px}.navbar-search[_ngcontent-ng-c1963281972]{margin:10px 0;width:100%}.search-category-dropdown[_ngcontent-ng-c1963281972]{font-size:12px;padding:0 5px}.navbar-search[_ngcontent-ng-c1963281972]   input[type=text][_ngcontent-ng-c1963281972]{font-size:12px}.navbar-search[_ngcontent-ng-c1963281972]   button[_ngcontent-ng-c1963281972]{background-size:16px;width:36px}.navbar-links[_ngcontent-ng-c1963281972]{flex-direction:column;gap:8px;width:100%;text-align:center}.navbar-links[_ngcontent-ng-c1963281972]   a[_ngcontent-ng-c1963281972]{font-size:12px}.cart-icon[_ngcontent-ng-c1963281972]{margin:10px 0 0}.cart-count[_ngcontent-ng-c1963281972]{top:-3px;right:-5px;font-size:10px;padding:1px 4px}}</style><style ng-app-id="ng">.footer[_ngcontent-ng-c4286541794]{background-color:#333;color:#fff;padding:40px 0}.footer-content[_ngcontent-ng-c4286541794]{display:flex;justify-content:space-between;align-items:flex-start;flex-wrap:wrap;padding:0 10%}.footer-section[_ngcontent-ng-c4286541794]{flex:1;min-width:200px;margin:20px 0;text-align:center}.footer-section[_ngcontent-ng-c4286541794]   h3[_ngcontent-ng-c4286541794]{font-size:18px;margin-bottom:15px;color:#ffd814;font-weight:600}.footer-section[_ngcontent-ng-c4286541794]   p[_ngcontent-ng-c4286541794], .footer-section[_ngcontent-ng-c4286541794]   ul[_ngcontent-ng-c4286541794], .footer-bottom[_ngcontent-ng-c4286541794]{font-size:14px;line-height:1.6}.footer-section[_ngcontent-ng-c4286541794]   ul[_ngcontent-ng-c4286541794]{list-style:none;padding:0;margin:0}.footer-section[_ngcontent-ng-c4286541794]   ul[_ngcontent-ng-c4286541794]   li[_ngcontent-ng-c4286541794]{margin-bottom:8px}.footer-section[_ngcontent-ng-c4286541794]   ul[_ngcontent-ng-c4286541794]   li[_ngcontent-ng-c4286541794]   a[_ngcontent-ng-c4286541794]{color:#fff;text-decoration:none;transition:color .3s}.footer-section[_ngcontent-ng-c4286541794]   ul[_ngcontent-ng-c4286541794]   li[_ngcontent-ng-c4286541794]   a[_ngcontent-ng-c4286541794]:hover{color:#ffd814}.footer-bottom[_ngcontent-ng-c4286541794]{text-align:center;font-size:14px;padding:20px 0;border-top:1px solid #444;margin-top:20px}.social-icons[_ngcontent-ng-c4286541794]{display:flex;justify-content:center;gap:15px;margin-top:15px}.social-icons[_ngcontent-ng-c4286541794]   a[_ngcontent-ng-c4286541794]{color:#fff;font-size:20px;text-decoration:none;transition:color .3s}.social-icons[_ngcontent-ng-c4286541794]   a[_ngcontent-ng-c4286541794]:hover{color:#ffd814}@media (max-width: 768px){.footer-content[_ngcontent-ng-c4286541794]{flex-direction:column;align-items:center}.footer-section[_ngcontent-ng-c4286541794]{margin:20px 0}}</style><style ng-app-id="ng">.payment-form[_ngcontent-ng-c299421846]{max-width:400px;margin:40px auto;padding:20px;border-radius:8px;background:#f4f4f9;box-shadow:0 8px 20px #00000026;font-family:Arial,sans-serif}.payment-form[_ngcontent-ng-c299421846]   h2[_ngcontent-ng-c299421846]{text-align:center;color:#333;font-weight:600;margin-bottom:20px}.form-group[_ngcontent-ng-c299421846]{margin-bottom:20px}.form-group[_ngcontent-ng-c299421846]   label[_ngcontent-ng-c299421846]{display:block;font-size:14px;font-weight:600;color:#555;margin-bottom:8px}.form-group[_ngcontent-ng-c299421846]   input[_ngcontent-ng-c299421846]{width:100%;padding:10px;font-size:16px;border:1px solid #ccc;border-radius:4px;outline:none;transition:border-color .3s}.form-group[_ngcontent-ng-c299421846]   input[_ngcontent-ng-c299421846]:focus{border-color:#06c}.form-group[_ngcontent-ng-c299421846]   input.ng-invalid.ng-touched[_ngcontent-ng-c299421846]{border-color:#ff4d4d}.form-group[_ngcontent-ng-c299421846]   div[_ngcontent-ng-c299421846]{font-size:12px;color:#ff4d4d;margin-top:4px}button[type=submit][_ngcontent-ng-c299421846]{width:100%;padding:12px;font-size:16px;font-weight:600;color:#fff;background-color:#06c;border:none;border-radius:4px;cursor:pointer;transition:background-color .3s}button[type=submit][_ngcontent-ng-c299421846]:hover{background-color:#005bb5}button[type=submit][_ngcontent-ng-c299421846]:disabled{background-color:#ccc;cursor:not-allowed}@media (max-width: 768px){.payment-form[_ngcontent-ng-c299421846]{padding:15px;margin:20px auto}.payment-form[_ngcontent-ng-c299421846]   h2[_ngcontent-ng-c299421846]{font-size:20px}.form-group[_ngcontent-ng-c299421846]{margin-bottom:15px}.form-group[_ngcontent-ng-c299421846]   label[_ngcontent-ng-c299421846]{font-size:13px}.form-group[_ngcontent-ng-c299421846]   input[_ngcontent-ng-c299421846]{padding:12px;font-size:14px}button[type=submit][_ngcontent-ng-c299421846]{padding:10px;font-size:14px}}@media (max-width: 480px){.payment-form[_ngcontent-ng-c299421846]{padding:10px;margin:10px auto}.payment-form[_ngcontent-ng-c299421846]   h2[_ngcontent-ng-c299421846]{font-size:18px}.form-group[_ngcontent-ng-c299421846]{margin-bottom:12px}.form-group[_ngcontent-ng-c299421846]   label[_ngcontent-ng-c299421846]{font-size:12px}.form-group[_ngcontent-ng-c299421846]   input[_ngcontent-ng-c299421846]{padding:10px;font-size:14px}button[type=submit][_ngcontent-ng-c299421846]{padding:8px;font-size:14px}}</style></head>
<body><!--nghm--><script type="text/javascript" id="ng-event-dispatch-contract">(()=>{function p(t,n,r,o,e,i,f,m){return{eventType:t,event:n,targetElement:r,eic:o,timeStamp:e,eia:i,eirp:f,eiack:m}}function u(t){let n=[],r=e=>{n.push(e)};return{c:t,q:n,et:[],etc:[],d:r,h:e=>{r(p(e.type,e,e.target,t,Date.now()))}}}function s(t,n,r){for(let o=0;o<n.length;o++){let e=n[o];(r?t.etc:t.et).push(e),t.c.addEventListener(e,t.h,r)}}function c(t,n,r,o,e=window){let i=u(t);e._ejsas||(e._ejsas={}),e._ejsas[n]=i,s(i,r),s(i,o,!0)}window.__jsaction_bootstrap=c;})();
</script><script>window.__jsaction_bootstrap(document.body,"ng",["click","submit"],[]);</script>
  <app-root ng-version="19.0.6" ngh="2" ng-server-context="ssg"><app-navbar _nghost-ng-c1963281972 ngh="0"><nav _ngcontent-ng-c1963281972 class="navbar"><div _ngcontent-ng-c1963281972 class="navbar-logo"><a _ngcontent-ng-c1963281972 jsaction="click:;">Amazon</a></div><form _ngcontent-ng-c1963281972 novalidate class="ng-untouched ng-pristine ng-valid" jsaction="submit:;"><input _ngcontent-ng-c1963281972 type="text" placeholder="Search products"><button _ngcontent-ng-c1963281972 type="submit">Search</button></form><ul _ngcontent-ng-c1963281972 class="navbar-links"><li _ngcontent-ng-c1963281972><a _ngcontent-ng-c1963281972 jsaction="click:;">Electronics</a></li><li _ngcontent-ng-c1963281972><a _ngcontent-ng-c1963281972 jsaction="click:;">Fashion</a></li><li _ngcontent-ng-c1963281972><a _ngcontent-ng-c1963281972 jsaction="click:;">Home &amp; Kitchen</a></li><!----><li _ngcontent-ng-c1963281972><a _ngcontent-ng-c1963281972 jsaction="click:;">Account</a></li><li _ngcontent-ng-c1963281972 class="cart-icon" jsaction="click:;"><img _ngcontent-ng-c1963281972 src="/assets/cart-icon.jpg" alt="Cart"><!----></li></ul></nav></app-navbar><router-outlet></router-outlet><!----><router-outlet></router-outlet><!----><app-footer _nghost-ng-c4286541794 ngh="1"><footer _ngcontent-ng-c4286541794 class="footer"><div _ngcontent-ng-c4286541794 class="footer-content"><div _ngcontent-ng-c4286541794 class="footer-section about"><h3 _ngcontent-ng-c4286541794>About Us</h3><p _ngcontent-ng-c4286541794>We are committed to providing the best service. Learn more about our mission and values.</p></div><div _ngcontent-ng-c4286541794 class="footer-section links"><h3 _ngcontent-ng-c4286541794>Quick Links</h3><ul _ngcontent-ng-c4286541794><li _ngcontent-ng-c4286541794><a _ngcontent-ng-c4286541794 href="#">Home</a></li><li _ngcontent-ng-c4286541794><a _ngcontent-ng-c4286541794 href="#">Shop</a></li><li _ngcontent-ng-c4286541794><a _ngcontent-ng-c4286541794 href="#">Contact</a></li><li _ngcontent-ng-c4286541794><a _ngcontent-ng-c4286541794 href="#">FAQ</a></li><li _ngcontent-ng-c4286541794><a _ngcontent-ng-c4286541794 href="#">Terms of Service</a></li></ul></div><div _ngcontent-ng-c4286541794 class="footer-section contact"><h3 _ngcontent-ng-c4286541794>Contact Us</h3><p _ngcontent-ng-c4286541794>Email: support.com</p><p _ngcontent-ng-c4286541794>Phone: +1 234 567 890</p><p _ngcontent-ng-c4286541794>Address: 123 Street Name, City, Country</p></div><div _ngcontent-ng-c4286541794 class="footer-section social"><h3 _ngcontent-ng-c4286541794>Follow Us</h3><div _ngcontent-ng-c4286541794 class="social-icons"><a _ngcontent-ng-c4286541794 href="#"><i _ngcontent-ng-c4286541794 class="fab fa-facebook"></i></a><a _ngcontent-ng-c4286541794 href="#"><i _ngcontent-ng-c4286541794 class="fab fa-twitter"></i></a><a _ngcontent-ng-c4286541794 href="#"><i _ngcontent-ng-c4286541794 class="fab fa-instagram"></i></a><a _ngcontent-ng-c4286541794 href="#"><i _ngcontent-ng-c4286541794 class="fab fa-linkedin"></i></a></div></div></div><div _ngcontent-ng-c4286541794 class="footer-bottom"><p _ngcontent-ng-c4286541794>© 2024 YourCompany. All rights reserved.</p></div></footer></app-footer></app-root>
<script src="polyfills-FFHMD2TL.js" type="module"></script><script src="main-BM2ZESKT.js" type="module"></script>

<script id="ng-state" type="application/json">{"__nghData__":[{"t":{"10":"t0","16":"t1"},"c":{"10":[{"i":"t0","r":1,"x":3}],"16":[]}},{},{"c":{"1":[],"2":[]}}]}</script></body></html>`;