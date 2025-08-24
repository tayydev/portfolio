<div class="image-text-container">
    <div class="bg">&nbsp;</div>
    <div class="caption">
        Software Engineer
    </div>
</div>

<style>

    .image-text-container {
        position: relative;
        margin-top: 3px;
    }

    .caption {
        margin-left: auto;
        width: fit-content;
        z-index: 1;
        text-align: right;
        margin-right: 8px;

        color: var(--color-terminal-grey);
        font-size: 24px;
        font-weight: bold;
    }

    .bg {
        position: absolute;
        transform: translate(124px, 0px);
        z-index: -1;

        font-size: 24px;

        background: var(--color-sprout-green);
        width: 825px;
    }
    
    /* Mobile responsive styles */
    @media (max-width: 1024px) {
        .image-text-container {
            margin-top: 0;
            width: 100%;
            max-width: 300px;
        }
        
        .caption {
            margin: 0;
            text-align: center;
            font-size: 18px;
            padding: 4px 12px;
            position: relative;
            z-index: 1;
        }
        
        .bg {
            position: absolute;
            transform: none;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            width: 100%;
            height: 100%;
        }
    }
    
</style>
