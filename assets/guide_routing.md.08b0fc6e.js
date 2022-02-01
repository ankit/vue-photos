import{_ as n,c as a,o as s,a as t}from"./app.07e2f4eb.js";const g='{"title":"Routing","description":"","frontmatter":{},"headers":[{"level":2,"title":"Hosting at root of Vue app","slug":"hosting-at-root-of-vue-app"},{"level":2,"title":"Hosting on a subroute","slug":"hosting-on-a-subroute"}],"relativePath":"guide/routing.md","lastUpdated":1643714486121}',o={},p=t(`<h1 id="routing" tabindex="-1">Routing <a class="header-anchor" href="#routing" aria-hidden="true">#</a></h1><h2 id="hosting-at-root-of-vue-app" tabindex="-1">Hosting at root of Vue app <a class="header-anchor" href="#hosting-at-root-of-vue-app" aria-hidden="true">#</a></h2><div class="language-typescript"><pre><code><span class="token keyword">const</span> routes <span class="token operator">=</span> <span class="token punctuation">[</span>
  <span class="token punctuation">{</span> path<span class="token operator">:</span> <span class="token string">&#39;/&#39;</span><span class="token punctuation">,</span> component<span class="token operator">:</span> PhotoGallery<span class="token punctuation">,</span> children<span class="token operator">:</span> <span class="token function">createRoutes</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">]</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> router <span class="token operator">=</span> <span class="token function">createRouter</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  history<span class="token operator">:</span> <span class="token function">createWebHashHistory</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
  routes<span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> router<span class="token punctuation">;</span>
</code></pre></div><h2 id="hosting-on-a-subroute" tabindex="-1">Hosting on a subroute <a class="header-anchor" href="#hosting-on-a-subroute" aria-hidden="true">#</a></h2><p>The photo gallery can be easily displayed on a subroute.</p><div class="language-typescript"><pre><code><span class="token keyword">const</span> routes <span class="token operator">=</span> <span class="token punctuation">[</span>
  <span class="token punctuation">{</span>
    path<span class="token operator">:</span> <span class="token string">&#39;/photography&#39;</span><span class="token punctuation">,</span>
    component<span class="token operator">:</span> PhotoGallery<span class="token punctuation">,</span>
    children<span class="token operator">:</span> <span class="token function">createRoutes</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">]</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> router <span class="token operator">=</span> <span class="token function">createRouter</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  history<span class="token operator">:</span> <span class="token function">createWebHashHistory</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
  routes<span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> router<span class="token punctuation">;</span>
</code></pre></div>`,6),e=[p];function c(u,r,i,l,k,d){return s(),a("div",null,e)}var _=n(o,[["render",c]]);export{g as __pageData,_ as default};
