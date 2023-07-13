<template>
    <div class="wrapper-note-item">
        <div class="content-wrapper-note-item ">
            <div class="position-number">#16</div>
            <div class="subhead">{{itemNote.title}}</div>
            <div class="date-wrapper flex-gap-16 wrapper-date">
                <div class="start-date silent-text">17.05.2005</div>
                <span>-</span>
                <div class="end-date silent-text">17.05.2005</div>
            </div>
            <div class="wrapper-details flex-gap-16">
                    <div class="details-item flex-gap-8">
                        <img src="../assets/img/link-icon.svg" alt="">
                    </div>
                    <div class="details-item flex-gap-8">
                        <img src="../assets/img/danger-icon.svg" alt="">
                    </div>
                    <div class="details-item flex-gap-8">
                        <img src="../assets/img/setting-icon.svg" alt="">
                    </div>
                    <div class="details-item flex-gap-8">
                        <img src="../assets/img/message-icon.svg" alt="">
                    </div>
            </div>
        </div>
    </div>
</template>
<script>
export default{
    props:{
        itemNote:{
            type:Object,
            requered:true
        }
    }
}
</script>