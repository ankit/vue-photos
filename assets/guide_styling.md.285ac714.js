import{_ as n,c as s,o as a,a as t}from"./app.07e2f4eb.js";const _='{"title":"Styling","description":"","frontmatter":{},"headers":[{"level":2,"title":"Album Title Styling","slug":"album-title-styling"}],"relativePath":"guide/styling.md","lastUpdated":1643711896660}',e={},p=t(`<h1 id="styling" tabindex="-1">Styling <a class="header-anchor" href="#styling" aria-hidden="true">#</a></h1><p>The photo albums and photos are layed out using a pre-defined css grid. Styling for the most part is not configurable.</p><h2 id="album-title-styling" tabindex="-1">Album Title Styling <a class="header-anchor" href="#album-title-styling" aria-hidden="true">#</a></h2><p>The album title styling in the list and single album views can be configured by providing custom styles.</p><div class="language-typescript"><pre><code><span class="token keyword">const</span> photos <span class="token operator">=</span> <span class="token function">createPhotos</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  albums<span class="token punctuation">,</span>
  photoAlbumListTitleStyle<span class="token operator">:</span> <span class="token punctuation">{</span>
    fontSize<span class="token operator">:</span> <span class="token string">&#39;24px&#39;</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  photoAlbumTitleStyle<span class="token operator">:</span> <span class="token punctuation">{</span>
    fontSize<span class="token operator">:</span> <span class="token string">&#39;28px&#39;</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

app<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>photos<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div>`,5),o=[p];function l(i,c,u,r,d,k){return a(),s("div",null,o)}var g=n(e,[["render",l]]);export{_ as __pageData,g as default};
