(function(){
	"use strict";
	var app = angular.module("newsApp")
	.controller("newsController", function(newsService){
		var vm = this

		vm.news=[];

		vm.loading = true;

		newsService.getAll().then(function(response){
			vm.loading = false;
			if(response.status == 200){
				vm.news = [];

				for(var i = 0;i < response.data.articles.length;i++)
					if(response.data.articles[i].urlToImage != null)
						vm.news.push(response.data.articles[i]);
				//vm.news = response.data.articles;
			}else{
				alert("todo mal")
			}
		})		

		/*vm.news = [
				{
					"source": {
						"id": null,
						"name": "Bitcoinist.com"
					},
					"author": "Georgi Georgiev",
					"title": "First Bitcoin-Backed Loan Issued in Canada",
					"description": "The first Bitcoin-backed loan has been issued to a Canadian company allowing cryptocurrency holders to liquify their assets without selling. Bitcoin Loan a ‘Game Changer’ Canadian company Ledn, has purportedly become the first and only local lender to issue C…",
					"url": "https://bitcoinist.com/bitcoin-loan-issued-canada/",
					"urlToImage": "https://bitcoinist.com/wp-content/uploads/2018/11/shutterstock_791512465-980x613.jpg",
					"publishedAt": "2018-08-06T01:00:31Z",
					"content": "The first Bitcoin-backed loan has been issued to a Canadian company allowing cryptocurrency holders to liquify their assets without selling. Bitcoin Loan a ‘Game Changer’ Canadian company Ledn, has purportedly become the first and only local lender to issue C… [+1893 chars]"
				},
				{
					"source": {
						"id": null,
						"name": "Crowdfundinsider.com"
					},
					"author": "Cali Haan",
					"title": "Permalink to Police in Turkey Arrest 11 People Connected to Alleged Bitcoin Theft",
					"description": "Police in Istanbul arrested 11 people last week in connection with the hacking theft of bitcoins from the cryptocurrency wallets of 14 victims, Hürriyet reports. Along with 11 suspects detained, police from the Cybercrimes Division also seized 18 mobile phone…",
					"url": "https://www.crowdfundinsider.com/2018/11/140913-police-in-turkey-arrest-11-people-connected-to-alleged-bitcoin-theft/",
					"urlToImage": "https://cdn.crowdfundinsider.com/wp-content/uploads/2018/11/Sultanahmet-Turkey-by-Fatih-Yürür-on-Unsplash.jpg",
					"publishedAt": "2018-11-06T01:00:00Z",
					"content": "Police in Istanbul arrested 11 people last week in connection with the hacking theft of bitcoins from the cryptocurrency wallets of 14 victims, Hürriyet reports. Along with 11 suspects detained, police from the Cybercrimes Division also seized 18 mobile phone… [+1670 chars]"
				},
				{
					"source": {
						"id": "crypto-coins-news",
						"name": "Crypto Coins News"
					},
					"author": "P. H. Madore",
					"title": "‘1250x’: Bitstamp Says New Upgrade Will Make Crypto Trading Faster than Ever",
					"description": "Cinnober, which was acquired by Nasdaq in September, has signed on to help Luxembourg-based Bitstamp, a crypto exchange with many millions of trades and years to its record. Bitstamp’s matching system will reportedly increase 1,250x, and its overall throughpu…",
					"url": "https://www.ccn.com/1250x-bitstamp-says-new-upgrade-will-make-crypto-trading-faster-than-ever/",
					"urlToImage": "https://www.ccn.com/wp-content/uploads/2018/10/gearing-up-preparing-motorcycle-rider-racer.jpg",
					"publishedAt": "2018-11-06T00:55:20Z",
					"content": "Cinnober, which was acquired by Nasdaq in September, has signed on to help Luxembourg-based Bitstamp, a crypto exchange with many millions of trades and years to its record. Bitstamps matching system will reportedly increase 1,250x, and its overall throughput… [+2429 chars]"
				},
				{
					"source": {
						"id": null,
						"name": "Cointelegraph.com"
					},
					"author": "Cointelegraph By Ana Alexandre",
					"title": "Fake Elon Musk Accounts on Twitter Promote Bitcoin Scams, One Collects $170K",
					"description": "More than $150,000 have been lost in another Elon Musk impersonation crypto scam on Twitter, with hackers compromising the accounts of a U.S. politician and French film company",
					"url": "https://cointelegraph.com/news/fake-elon-musk-accounts-on-twitter-promote-bitcoin-scams-one-collects-170k",
					"urlToImage": "https://images.cointelegraph.com/images/740_aHR0cHM6Ly9zMy5jb2ludGVsZWdyYXBoLmNvbS9zdG9yYWdlL3VwbG9hZHMvdmlldy9lOWE5OGQ3YzI4NDA3ZTg4MjI2ZDAxYzg4ZDhiN2U5OS5qcGc=.jpg",
					"publishedAt": "2018-11-05T23:59:00Z",
					"content": null
				},
				{
					"source": {
						"id": "crypto-coins-news",
						"name": "Crypto Coins News"
					},
					"author": "Yashu Gola",
					"title": "Only 19% Chance Bitcoin Price Breaches $10,000 by June 2019: Traders",
					"description": "A drop in the bitcoin price’s daily moves has lowered the market’s expectations of reclaiming a five-figure valuation anytime soon. Options Traders Not Bullish on Bitcoin Skew — a crypto analysis blog authored by two London-based derivative traders — claimed …",
					"url": "https://www.ccn.com/only-19-chance-bitcoin-price-breaches-10000-by-june-2019-traders/",
					"urlToImage": "https://www.ccn.com/wp-content/uploads/2018/07/look-at-bitcoin-invest-perplexed-not-sure-1024x683.jpg",
					"publishedAt": "2018-11-05T23:58:04Z",
					"content": "A drop in the bitcoin price’s daily moves has lowered the market’s expectations of reclaiming a five-figure valuation anytime soon. Options Traders Not Bullish on Bitcoin Skew — a crypto analysis blog authored by two London-based derivative traders — claimed … [+2576 chars]"
				},
				{
					"source": {
						"id": null,
						"name": "Sfgate.com"
					},
					"author": "By Nathaniel Popper",
					"title": "Bitcoin’s ‘first felon’ faces more legal trouble",
					"description": "Over the past year, Charlie Shrem, a 28-year-old bitcoin investor, has bought two Maseratis, two powerboats — one of them 32 feet long — and a $2 million house in Florida, along with smaller pieces of real estate. In the world of cryptocurrencies, where milli…",
					"url": "https://www.sfgate.com/business/article/Bitcoin-s-first-felon-faces-more-legal-13364987.php",
					"urlToImage": "https://www.sfgate.com/img/pages/article/opengraph_default.png",
					"publishedAt": "2018-11-05T23:41:57Z",
					"content": "Over the past year, Charlie Shrem, a 28-year-old bitcoin investor, has bought two Maseratis, two powerboats — one of them 32 feet long — and a $2 million house in Florida, along with smaller pieces of real estate. In the world of cryptocurrencies, where milli… [+5267 chars]"
				},
				{
					"source": {
						"id": "fortune",
						"name": "Fortune"
					},
					"author": "Emily Gillespie",
					"title": "Fortnite to Offer Football Jersey Skins in Deal Between NFL, Epic Games",
					"description": "Epic Games has partnered with the NFL to let Fortnite players buy \"skins\" featuring uniform jerseys of their favorite football teams.",
					"url": "http://fortune.com/2018/11/05/fortnite-to-offer-football-jersey-skins-in-deal-between-nfl-epic-games/",
					"urlToImage": "https://fortunedotcom.files.wordpress.com/2018/11/fortnite-nfl-art.jpg",
					"publishedAt": "2018-11-05T23:13:02Z",
					"content": "NFL fans who fire up a couple rounds of Fortnite: Battle Royale during halftime of Monday Night Football will be able to wear their favorite team’s colors next weekvirtually, at least. In a deal between the NFL and Epic Games, the creators of the popular onli… [+1504 chars]"
				},
				{
					"source": {
						"id": null,
						"name": "Newsbtc.com"
					},
					"author": "Ricardo Esteves",
					"title": "Bitcoin Bulls Win Battle at $6,400 Resistance, Resume Range Trading",
					"description": "Bitcoin shed some of the gains made earlier in the day, erasing $40 from its daily high at $6,500. The BTC/USD pair trades at $6,460 in a ranging market with support at $6,300. A significant bearish trend line may have been thwarted as the market moves above …",
					"url": "https://www.newsbtc.com/2018/11/05/bitcoin-bulls-win-battle-at-6400-resistance-resume-range-trading/",
					"urlToImage": "https://s3.amazonaws.com/main-newsbtc-images/2018/10/18193619/Celebrity.jpg",
					"publishedAt": "2018-11-05T23:05:24Z",
					"content": "Bitcoin shed some of the gains made earlier in the day, erasing $40 from its daily high at $6,500. The BTC/USD pair trades at $6,460 in a ranging market with support at $6,300. A significant bearish trend line may have been thwarted as the market moves above … [+2549 chars]"
				},
				{
					"source": {
						"id": null,
						"name": "Bleepingcomputer.com"
					},
					"author": null,
					"title": "ElectroShop Offering Products To Pay With Bitcoin and others cryptocurrency !",
					"description": null,
					"url": "https://www.bleepingcomputer.com/forums/t/686168/electroshop-offering-products-to-pay-with-bitcoin-and-others-cryptocurrency/",
					"urlToImage": null,
					"publishedAt": "2018-11-05T23:00:32Z",
					"content": null
				},
				{
					"source": {
						"id": null,
						"name": "Bleepingcomputer.com"
					},
					"author": null,
					"title": "ElectroShop Offering Products To Pay With Bitcoin and others cryptocurrency !",
					"description": null,
					"url": "https://www.bleepingcomputer.com/forums/t/686167/electroshop-offering-products-to-pay-with-bitcoin-and-others-cryptocurrency/",
					"urlToImage": null,
					"publishedAt": "2018-11-05T22:57:29Z",
					"content": null
				},
				{
					"source": {
						"id": null,
						"name": "Bleepingcomputer.com"
					},
					"author": "Lawrence Abrams",
					"title": "Fake Elon Musk Twitter Bitcoin Scam Earned 180K in One Day",
					"description": "A widespread scam pretending to be from Elon Musk and utilizing a stream of hacked Twitter accounts and fake giveaway sites has earned scammers over 28 bitcoins or approximately $180,000 in a single day. [...]",
					"url": "https://www.bleepingcomputer.com/news/security/fake-elon-musk-twitter-bitcoin-scam-earned-180k-in-one-day/",
					"urlToImage": "https://www.bleepstatic.com/content/hl-images/2018/11/05/bitcoin-header.jpg",
					"publishedAt": "2018-11-05T22:48:41Z",
					"content": "A widespread scam pretending to be from Elon Musk and utilizing a stream of hacked Twitter accounts and fake giveaway sites has earned scammers over 28 bitcoins or approximately $180,000 in a single day. This scam is being pulled off by attackers hacking into… [+2281 chars]"
				},
				{
					"source": {
						"id": "crypto-coins-news",
						"name": "Crypto Coins News"
					},
					"author": "P. H. Madore",
					"title": "Mainstream? Gwyneth Paltrow Promotes Bitcoin Investing Guide on Twitter",
					"description": "Celebrities and cryptocurrency have a long and complex history together. Seemingly everyone from boxers to rappers has publicly supported or even endorsed various types of cryptos, from ICOs to bitcoin proper. DJ Khaled and Floyd Mayweather have even been sue…",
					"url": "https://www.ccn.com/mainstream-gwyneth-paltrow-promotes-bitcoin-investing-guide-on-twitter/",
					"urlToImage": "https://www.ccn.com/wp-content/uploads/2018/11/gwyneth-paltrow-bitcoin.jpg",
					"publishedAt": "2018-11-05T22:24:34Z",
					"content": "Celebrities and cryptocurrency have a long and complex history together. Seemingly everyone from boxers to rappers has publicly supported or even endorsed various types of cryptos, from ICOs to bitcoin proper. DJ Khaled and Floyd Mayweather have even been sue… [+3116 chars]"
				},
				{
					"source": {
						"id": null,
						"name": "Securityinfowatch.com"
					},
					"author": null,
					"title": "Following ransomware attack, Colorado CTO talks layers of defense",
					"description": "The Colorado Department of Transportation found themselves in the unfortunate position of being a poster child for the growing sophistication of the ransomware threat earlier this year. In late February, the agency took its computers offline as a result of a …",
					"url": "https://www.securityinfowatch.com/news/12435599/following-ransomware-attack-colorado-cto-talks-layers-of-defense",
					"urlToImage": "https://r1.securityinfowatch.com/files/media/www.securityinfowatch.com/beta/og_default.jpg",
					"publishedAt": "2018-11-05T22:11:00Z",
					"content": "The Colorado Department of Transportation found themselves in the unfortunate position of being a poster child for the growing sophistication of the ransomware threat earlier this year. In late February, the agency took its computers offline as a result of a … [+1651 chars]"
				},
				{
					"source": {
						"id": null,
						"name": "Scmp.com"
					},
					"author": "Zheping Huang, Zheping Huang",
					"title": "Explainer: What is Hong Kong’s plan for licensing cryptocurrency exchanges",
					"description": "The wild west days of cryptocurrency exchanges in Hong Kong may be at an end. The city’s securities watchdog last week unveiled a new set of rules governing cryptocurrencies, which included a potential route for the licensing of digital asset exchanges for th…",
					"url": "https://www.scmp.com/tech/blockchain/article/2171727/explainer-what-hong-kongs-plan-licensing-cryptocurrency-exchanges",
					"urlToImage": "https://cdn4.i-scmp.com/sites/default/files/styles/620x356/public/images/methode/2018/11/05/0d098072-e0c7-11e8-829d-1199cf0acfc4_image_hires_150104.JPG?itok=3gtD1S6q",
					"publishedAt": "2018-11-05T22:03:26Z",
					"content": "The wild west days of cryptocurrency exchanges in Hong Kong may be at an end. The citys securities watchdog last week unveiled a new set of rules governing cryptocurrencies, which included a potential route for the licensing of digital asset exchanges for the… [+4014 chars]"
				},
				{
					"source": {
						"id": null,
						"name": "Bitcoinist.com"
					},
					"author": "Bitcoinist",
					"title": "BitMEX Research Launches New BTC/BCH Fork Monitoring Website",
					"description": "BitMEX has officially announced the launch of a new BitMEX-sponsored website called ForkMonitor.info, which may be used to keep track of the happenings surrounding both softfork and hardfork network upgrades for Bitcoin (BTC) and Bitcoin Cash (BCH). Bitcoin C…",
					"url": "https://bitcoinist.com/bitmex-research-btc-bch-fork-website/",
					"urlToImage": "https://bitcoinist.com/wp-content/uploads/2018/11/shutterstock_1030176544.jpg",
					"publishedAt": "2018-11-05T22:00:21Z",
					"content": "BitMEX has officially announced the launch of a new BitMEX-sponsored website called ForkMonitor.info, which may be used to keep track of the happenings surrounding both softfork and hardfork network upgrades for Bitcoin (BTC) and Bitcoin Cash (BCH). Bitcoin C… [+1735 chars]"
				},
				{
					"source": {
						"id": null,
						"name": "Marketwatch.com"
					},
					"author": "MarketWatch",
					"title": "This is what’s happened to stocks after every midterm election since World War II",
					"description": "It’s good news, even though Americans are on edge about politics.",
					"url": "https://www.marketwatch.com/story/this-is-whats-happened-to-stocks-after-every-midterm-election-since-world-war-ii-2018-11-05-17103011",
					"urlToImage": "https://mw3.wsj.net/mw5/content/logos/mw_logo_social.png",
					"publishedAt": "2018-11-05T22:00:12Z",
					"content": "Its good news, even though Americans are on edge about politics. See full story. No illusions that were out of the woods, says Wall Street analyst who called the stock-market selloff Michael Wilson, Morgan Stanleys chief U.S. equity strategist, says so-called… [+1157 chars]"
				},
				{
					"source": {
						"id": null,
						"name": "Cointelegraph.com"
					},
					"author": "Cointelegraph By Rakesh Upadhyay",
					"title": "Bitcoin, Ethereum, Ripple, Bitcoin Cash, EOS, Stellar, Litecoin, Cardano, Monero, TRON: Price Analysis, November 5",
					"description": "Predictions vary as some traders wonder whether a Bitcoin end-of-year rally will come as it has in previous years. What are the key levels to watch?",
					"url": "https://cointelegraph.com/news/bitcoin-ethereum-ripple-bitcoin-cash-eos-stellar-litecoin-cardano-monero-tron-price-analysis-november-5",
					"urlToImage": "https://images.cointelegraph.com/images/740_aHR0cHM6Ly9zMy5jb2ludGVsZWdyYXBoLmNvbS9zdG9yYWdlL3VwbG9hZHMvdmlldy9jMWZkNDA5ZTE3MDFhMDViMDlmMGIxNDlkYWExNWNjNC5qcGc=.jpg",
					"publishedAt": "2018-11-05T21:52:00Z",
					"content": null
				},
				{
					"source": {
						"id": null,
						"name": "Thisismoney.co.uk"
					},
					"author": "https://www.dailymail.co.uk/debate/columnists/columnist-1132923/The-dastardly-Mr-Deedes.html",
					"title": "CITY DIARY: Major investors unhappy about the power sharing arrangement at Standard Life Aberdeen",
					"description": "According to a poll of 21 large investors, conducted by Pocensus, more than two thirds said they’d prefer an outside candidate to replace the joint chief executives within the next year.",
					"url": "https://www.thisismoney.co.uk/money/comment/article-6355713/CITY-DIARY-Major-investors-unhappy-power-sharing-arrangement-Standard-Life-Aberdeen.html",
					"urlToImage": "https://i.dailymail.co.uk/1s/2018/11/05/18/4521314-0-image-a-11_1541442933237.jpg",
					"publishedAt": "2018-11-05T21:50:59Z",
					"content": "Investors are keen for Standard Life Aberdeen to ditch the firm's peculiar power-sharing arrangement between Martin Gilbert and Keith Skeoch. According to a poll of 21 large investors, more than two-thirds said they'd prefer an outside candidate to replace th… [+1726 chars]"
				},
				{
					"source": {
						"id": null,
						"name": "Zerohedge.com"
					},
					"author": "Tyler Durden",
					"title": "Johnstone: Midterms Would Be A Walkover If Dems Had Not Wasted 2 Years On 'Russiagate'",
					"description": "Authored by Caitlin Johnstone via Medium.com, I haven’t been writing about the US midterms much, because I don’t care about that nonsense anymore. The whole thing’s a fake pro wrestling performance staged every couple of years to give a heavily armed populace…",
					"url": "https://www.zerohedge.com/news/2018-11-05/johnstone-midterms-would-be-walkover-if-dems-had-not-wasted-2-years-russiagate",
					"urlToImage": "https://www.zerohedge.com/sites/default/files/styles/max_650x650/public/2018-11/1_dGJaKH4zTvsA9c6ggaVQRw.png?itok=D4DE0Js2",
					"publishedAt": "2018-11-05T21:44:58Z",
					"content": "Authored by Caitlin Johnstone via Medium.com, I havent been writing about the US midterms much, because I dont care about that nonsense anymore. The whole things a fake pro wrestling performance staged every couple of years to give a heavily armed populace th… [+8449 chars]"
				},
				{
					"source": {
						"id": null,
						"name": "Slate.com"
					},
					"author": "Aaron Mak, Aaron Mak",
					"title": "More Than a Dozen Verified Twitter Accounts Hacked to Impersonate Elon Musk, Steal Bitcoin",
					"description": "More than a dozen verified Twitter accounts, including two belonging to members of Congress, were apparently hacked on Monday as a part of a scam to steal Bitcoin.",
					"url": "https://slate.com/technology/2018/11/elon-musk-bitcoin-scam-hackers-impersonate-tesla-ceo-twitter-accounts.html",
					"urlToImage": "https://compote.slate.com/images/a96333fa-b2fe-4dc7-84e3-914ab0256897.jpeg?width=780&height=520&rect=4200x2800&offset=171x0",
					"publishedAt": "2018-11-05T21:42:54Z",
					"content": "Musk has become a popular target for Twitter impersonators looking to steal Bitcoin. Why Are Pelvic Exams on Unconscious, Unconsenting Women Still Part of Medical Training? Humans on Twitter Are Starting to Behave an Awful Lot Like Bots Do Meet Three Dudes Wh… [+4595 chars]"
					}
		];*/

	})
}());