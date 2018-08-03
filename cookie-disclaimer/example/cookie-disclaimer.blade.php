<div id="cookie-disclaimer">
    <div class="cd-box cd-btm cd-right" :class="{ 'cd-show': !hasAgreed }">
        <p>{{ __('cookie-disclaimer.message') }}</p>
        <a href="#">{{ __('cookie-disclaimer.link') }}</a>
        <button class="cd-button" @click="agree(1)">{{ __('cookie-disclaimer.dismiss') }}</button>
    </div>
</div>