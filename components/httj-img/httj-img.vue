<template>
	<view>
		<view class="htxq" v-for="(htxq,index) in htxqs" :key="index">
			<view class="time">
				<text>发布时间：{{htxq.time}}</text>
			</view>
			<view class="img">
				<image :src="htxq.img" mode=""></image>
			</view>
			<view class="text">
				<text>
					{{htxq.text}}
				</text>
			</view>
			<view class="icon">
			<view class="giveUp">
				<uni-icons class="giveUp" type="hand-thumbsup"></uni-icons>
				{{htxq.dz}}
			</view>
			<view class="watch">
				 <uni-icons class="watch" type="eye"></uni-icons>
				{{htxq.gk}}
			</view>
			<view class="comment">
				 <uni-icons class="comment" type="chat"></uni-icons>
				 {{htxq.ly}}
			</view>
		</view>
		</view>
	</view>
	
</template>

<script>
	export default {
		data() {
			return {
				htxqs:[
					{	
						id:'1',
						time:'2019.8.20',
						img:'../../static/image/huatitu@2x.png',
						text:'那年的秋季特别长,像一段雏形的永恒。我几乎以为站在四围的秋色里,那种圆溜溜的成熟感,会永远悬在那里,不坠下来。终于一切瓜一切果都过肥过重了,从腴沃中升起来的仍垂向腴沃。每到黄昏,太阳也垂垂落向南瓜田里,红橙橙的,一只熟得不能再熟下去的,特大号的南瓜。日子就像这样过去。晴天之后仍然是晴天之后仍然是完整无憾饱满得不能再饱满的睛天,敲上去会敲出音乐来的稀金属的晴天。就这样微酩地饮着清醒的秋季,好怎么不好,就是太寂寞了。在西密歇根大学,开了三门课,我有足够的时间看书,写信。但更多的时间,我用来幻想,而且回忆,回忆在有一个岛上做过的有意义和无意义的事情,一直到半夜,到半夜以后。有些事情,曾经恨过的,聊一次。一切都离我很久,很远。。有些无聊,甚至再无再恨一次;曾经恋过的,再恋一次;有些无聊,甚至再无聊一次。一切都离我很久,很远。',
						dz:'123',
						gk:'222',
						ly:'2211'
					}
				],
			}
		},
		methods: {
			
		}
	}
</script>

<style>
.htxq{
	width: 90%;
	margin: 3vh auto;
}
.time{
	width: 100%;
	height: 5vh;
}
.time text{
	line-height: 5vh;
	margin-left: 56vw;
	font-size: 12px;
	color: #999999;
}
.img{
	width: 100%;
	height: 27vh;
}
.img image{
	width: 100%;
	height: 100%;
}
.text{
	width: 100%;
	height: 41vh;
}
.text text{
	font-size: 23rpx;
}
.icon{
	display: flex;
	font-size: 13px;
	margin-top: 5vh;
}
.icon view{
	margin-left: 11vw;
	width: 60px;
}
</style>
