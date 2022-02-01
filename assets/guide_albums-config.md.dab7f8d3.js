import{_ as n,c as s,o as a,a as t}from"./app.07e2f4eb.js";const m='{"title":"Albums Configuration","description":"","frontmatter":{},"headers":[],"relativePath":"guide/albums-config.md","lastUpdated":1643538699124}',o={},p=t(`<h1 id="albums-configuration" tabindex="-1">Albums Configuration <a class="header-anchor" href="#albums-configuration" aria-hidden="true">#</a></h1><p>The photo albums and URLs are provided via a simple static JSON object. It is recommended to store it in <code>*.json</code> file and import it in <code>main.ts</code>.</p><div class="language-json"><pre><code><span class="token punctuation">[</span>
  <span class="token punctuation">{</span>
    <span class="token comment">/* used as URL slug */</span>
    <span class="token property">&quot;id&quot;</span><span class="token operator">:</span> <span class="token string">&quot;album-1&quot;</span><span class="token punctuation">,</span>

    <span class="token comment">/* title for the album */</span>
    <span class="token property">&quot;title&quot;</span><span class="token operator">:</span> <span class="token string">&quot;Album 1&quot;</span><span class="token punctuation">,</span>

    <span class="token property">&quot;photos&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token punctuation">{</span>
        <span class="token comment">/* image URL */</span>
        <span class="token property">&quot;src&quot;</span><span class="token operator">:</span> <span class="token string">&quot;image-1.jpg&quot;</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span>
        <span class="token property">&quot;src&quot;</span><span class="token operator">:</span> <span class="token string">&quot;image-2.jpg&quot;</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">]</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span>
    <span class="token property">&quot;id&quot;</span><span class="token operator">:</span> <span class="token string">&quot;album-2&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;title&quot;</span><span class="token operator">:</span> <span class="token string">&quot;Album 2&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;photos&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token punctuation">{</span>
        <span class="token property">&quot;src&quot;</span><span class="token operator">:</span> <span class="token string">&quot;image-1.jpg&quot;</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span>
        <span class="token property">&quot;src&quot;</span><span class="token operator">:</span> <span class="token string">&quot;image-2.jpg&quot;</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">]</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">]</span>
</code></pre></div>`,3),e=[p];function c(u,r,l,i,k,d){return a(),s("div",null,e)}var g=n(o,[["render",c]]);export{m as __pageData,g as default};
