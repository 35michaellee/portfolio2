__d(function(g,r,i,a,m,e,d){"use strict";Object.defineProperty(e,'__esModule',{value:!0});var t=r(d[3]).connect(function(t){return{currentUser:r(d[0]).getViewer(t),feedStoryTray:r(d[1]).getFeedStoryTrayWithoutOwn(t)}},function(t){return{onWatchAllStories(n){t(r(d[2]).openReelsMedia(n,'reel_feed_timeline'))}}})(i(d[4]));e.default=t},12910592,[9699477,9961476,9961475,5,12910593]);
__d(function(g,r,i,a,m,e,d){"use strict";function t({className:t,feedStoryTray:n,onWatchAllClick:l}){return a(d[1]).createElement(a(d[1]).Fragment,null,a(d[1]).createElement(i(d[3]),{className:t,headerText:r(d[4]).STORIES_TEXT,linkTo:"#",onClick:l,placeholder:null==n,secondaryText:null!=n&&n.isEmpty()?null:r(d[4]).WATCH_ALL_TEXT}),a(d[1]).createElement(r(d[2]).Box,{marginTop:2},a(d[1]).createElement(i(d[5]),{useContainer:!0,visibleCount:3.5})))}Object.defineProperty(e,'__esModule',{value:!0}),r(d[0]);const n=3,l=({children:t,marginBottom:n,marginTop:l})=>a(d[1]).createElement(r(d[2]).Box,{color:"ig-background",dangerouslySetClassName:{__className:"b2rUF"},marginBottom:n,marginTop:l,shape:"rounded"},t),o=52,s=550;var c=class extends a(d[1]).PureComponent{constructor(...t){super(...t),this.state={leftFixedPosition:null},this.$FeedSidebar1=(()=>{const t=s;a(d[6]).measure(()=>{if(null==this.$FeedSidebar2)return;let n=null;r(d[7]).canUseDOM&&window.pageYOffset>=o&&window.innerHeight>t&&(n=this.$FeedSidebar2.getBoundingClientRect().left),a(d[6]).mutate(()=>{null!=this.$FeedSidebar2&&this.setState({leftFixedPosition:n})})})}),this.$FeedSidebar3=(t=>{t.preventDefault();const n=i(d[8])(this.props.feedStoryTray);n.isEmpty()||this.props.onWatchAllStories(n)})}componentDidMount(){this.$FeedSidebar1(),null!=this.props.onDisplayDone&&this.props.onDisplayDone()}render(){const{currentUser:o,feedStoryTray:s}=this.props,{leftFixedPosition:c}=this.state;return a(d[1]).createElement(a(d[1]).Fragment,null,a(d[1]).createElement(i(d[9]),{event:"scroll",handler:this.$FeedSidebar1,passive:!0,target:window}),a(d[1]).createElement(i(d[9]),{event:"resize",handler:this.$FeedSidebar1,passive:!0,target:window}),a(d[1]).createElement("div",{className:"XmSS_",ref:t=>this.$FeedSidebar2=t}),a(d[1]).createElement("div",{className:`COOzN ${null!=c?"MnWb5":""}`,style:{left:c}},a(d[1]).createElement("div",{className:"m0NAq"},a(d[1]).createElement(i(d[10]),{isVerified:!1,name:i(d[8])(o.fullName),profilePictureUrl:i(d[8])(o.profilePictureUrl),username:i(d[8])(o.username)})),a(d[1]).createElement(l,{marginTop:1},a(d[1]).createElement(t,{feedStoryTray:s,onWatchAllClick:this.$FeedSidebar3})),a(d[1]).createElement(l,{marginBottom:3,marginTop:3},a(d[1]).createElement(i(d[3]),{headerText:r(d[11]).HEADER_TEXT,linkTo:r(d[12]).DISCOVER_PEOPLE_PATH,placeholder:null==s,secondaryText:r(d[13])(1245)}),a(d[1]).createElement(r(d[2]).Box,{marginBottom:1,marginStart:1},a(d[1]).createElement(i(d[11]),{analyticsContext:"desktop",avatarSize:"small",borderlessFollowButton:!0,count:n,footer:null,header:null,hideName:!0,hideUpsells:!0,initialRenderCount:n,viewModule:r(d[14]).VIEW_MODULES.desktop_feed}))),a(d[1]).createElement(i(d[15]),{variant:i(d[15]).VARIANTS.sidebar})))}};e.default=c,e.FeedSidebarContainer=l},12910593,[12910594,3,9699399,12910595,9961519,12910596,9699360,9502828,9699336,9895967,12910597,10092571,9699334,9699332,9961616,10158082]);
__d(function() {},12910594,[]);
__d(function(g,r,i,a,m,e,d){"use strict";Object.defineProperty(e,'__esModule',{value:!0}),r(d[0]);var o=o=>a(d[1]).createElement(r(d[2]).Box,{alignItems:"center",dangerouslySetClassName:{__className:void 0!==o.className?o.className:''},direction:"row",marginTop:3,paddingX:4,paddingY:1},a(d[1]).createElement(r(d[2]).Box,{flex:"grow"},a(d[1]).createElement(r(d[2]).Text.BodyEmphasized,{color:"ig-secondary-text",dangerouslySetClassName:{__className:"fTMOG"}},o.headerText)),o.linkTo&&Boolean(o.secondaryText)&&!0===o.placeholder&&a(d[1]).createElement(r(d[2]).Text.Footnote,{color:"ig-secondary-text"},o.secondaryText),o.linkTo&&Boolean(o.secondaryText)&&!0!==o.placeholder&&a(d[1]).createElement(r(d[2]).Button,{borderless:!0,color:"ig-secondary-action",disabled:!!o.placeholder,href:o.linkTo,onClick:o.onClick},a(d[1]).createElement(r(d[2]).Text.FootnoteEmphasized,null,o.secondaryText)));e.default=o},12910595,[12910598,3,9699399]);
__d(function() {},12910598,[]);
__d(function(g,r,i,a,m,e,d){"use strict";Object.defineProperty(e,'__esModule',{value:!0});var n=r(d[3]).connect(function(n){const t=r(d[0]).getSeenCountInStoryTray(n);return{hasOwnReel:r(d[0]).userHasReel(n,i(d[1])(n.users.viewerId)),isFullySeen:t=>{if(null!=t){const s=r(d[0]).getFirstUnseenReelItemIndex(n,t);return null!=s&&s<0}return!1},loadingId:n.stories.trayLoadingId,newReelCount:n.stories.feedTray&&n.stories.feedTray.count()-i(d[1])(t),reels:r(d[0]).getFeedStoryTrayWithoutOwn(n),seenReelCount:t,traySession:n.stories.traySession,viewerId:n.users.viewerId}},function(n){return{onLoadReel(t,s,o){n(r(d[2]).openReelsMedia(t,'reel_feed_timeline',s,o))}}})(i(d[4]));e.default=n},12910596,[9961476,9699336,9961475,5,12910599]);
__d(function(g,r,i,a,m,e,d){"use strict";Object.defineProperty(e,'__esModule',{value:!0}),r(d[0]);const t=r(d[1])(1339),s=68,o=52,n=50,l=r(d[2]).CORE_CONSTANTS.AVATAR_SIZES.medium,p=4,y=10;class u extends a(d[6]).PureComponent{constructor(...t){super(...t),this.$DesktopStoryTray3=((t,s)=>{this.props.onLoadReel(i(d[3])(this.props.reels),t,s)}),this.$DesktopStoryTray4=((t,s)=>{const o=this.props.reels?this.props.reels.get(s-1):null;i(d[4]).log(()=>({a_pk:Number(t),has_my_reel:i(d[3])(this.props.hasOwnReel)?1:0,is_new_reel:this.props.isFullySeen(null===o||void 0===o?void 0:o.id)?0:1,new_reel_count:i(d[3])(this.props.newReelCount),pigeon_reserved_keyword_module:'reel_feed_timeline',reel_type:r(d[5]).getTypeForLogging(null===o||void 0===o?void 0:o.type),tray_position:s,tray_session_id:this.props.traySession,viewed_reel_count:i(d[3])(this.props.seenReelCount)})),r(d[5]).logStoriesEvent({event_name:'reel_tray_impression',containermodule:'reel_feed_timeline',source_of_action:'reel_feed_timeline',ig_userid:this.props.viewerId,tray_session_id:this.props.traySession,media_author:t,tray_position:s,has_my_reel:i(d[3])(this.props.hasOwnReel),new_reel_count:i(d[3])(this.props.newReelCount),viewed_reel_count:i(d[3])(this.props.seenReelCount)})}),this.$DesktopStoryTray5=(({index:t,isVisible:s})=>{const o=i(d[3])(this.props.reels).get(t),n=null===o||void 0===o?void 0:o.latestReelMedia;return null!=o&&a(d[6]).createElement("div",{key:t,style:{height:this.$DesktopStoryTray2()}},a(d[6]).createElement(i(d[7]),{avatarSize:this.$DesktopStoryTray1(),condensed:this.props.useContainer,isVisible:s,lastUpdated:i(d[3])(n),onClick:this.$DesktopStoryTray3,onScrollEnter:this.$DesktopStoryTray4,reel:o,trayPosition:t}))}),this.$DesktopStoryTray6=(({index:t,isVisible:s})=>a(d[6]).createElement("div",{key:t,style:{height:this.$DesktopStoryTray2()}},a(d[6]).createElement(i(d[8]),{avatarSize:this.$DesktopStoryTray1(),hideAvatarBorder:this.props.useContainer,rounded:this.props.useContainer})))}$DesktopStoryTray1(){return this.props.useContainer?l-y:n}$DesktopStoryTray2(){return this.props.useContainer?o:s}$DesktopStoryTray7(){null!=this.props.reels&&this.props.onDisplayDone()}componentDidMount(){this.$DesktopStoryTray7()}componentDidUpdate(){this.$DesktopStoryTray7()}render(){const{reels:s,visibleCount:o,useContainer:n}=this.props;if(null!=s&&s.isEmpty())return a(d[6]).createElement(r(d[2]).Box,{marginBottom:4,paddingX:n?4:0,paddingY:2},a(d[6]).createElement(r(d[2]).Text.Body,{color:"ig-secondary-text"},t));const l=this.$DesktopStoryTray2(),y=l*o,u=Math.ceil(y/l);return a(d[6]).createElement(r(d[2]).Box,{dangerouslySetClassName:{__className:n?"":"aD2cN"},marginStart:n?4:0},null==s?a(d[6]).createElement(i(d[9]),{containerSize:y,estimatedItemSize:l,initialRenderCount:u,itemCount:u,overscanCount:0,renderer:this.$DesktopStoryTray6}):a(d[6]).createElement(i(d[9]),{containerSize:y,estimatedItemSize:l,initialRenderCount:u,itemCount:s.count(),overscanCount:p,renderer:this.$DesktopStoryTray5}))}}u.defaultProps={visibleCount:4.5,useContainer:!1};var _=i(d[10])('DesktopStoryTray',u);e.default=_,e.DESKTOP_TRAY_ROW_HEIGHT_CONDENSED=o,e.DESKTOP_STORY_TRAY_AVATAR_SIZE_CONDENSED=l,e.STORY_RING_PADDING=y},12910599,[12910600,9699332,9699399,9699336,12910601,9961482,3,12910602,12910603,9961710,9699379]);
__d(function() {},12910600,[]);
__d(function(g,r,i,a,m,e,d){"use strict";Object.defineProperty(e,'__esModule',{value:!0}),r(d[0]);let t=0;class s extends a(d[4]).PureComponent{constructor(...s){super(...s),this.$DesktopStoryTrayItem1=i(d[1])(s=>`DesktopStoryTrayItem_${t++}`),this.$DesktopStoryTrayItem3=(t=>{t.preventDefault(),this.props.onClick(this.props.reel.id,this.$DesktopStoryTrayItem1(this.props.reel.id))}),this.$DesktopStoryTrayItem2=(()=>{this.props.onScrollEnter(i(d[2])(this.props.reel.userId),this.props.trayPosition)})}componentDidMount(){this.props.isVisible&&this.$DesktopStoryTrayItem2()}componentDidUpdate(t){!t.isVisible&&this.props.isVisible&&this.$DesktopStoryTrayItem2()}render(){const{avatarSize:t,condensed:s,isMuted:o,isViewer:l,lastUpdated:n,profilePictureUrl:p,username:c}=this.props,u=l?r(d[3]).YOUR_STORY_TEXT:c;return a(d[4]).createElement("button",{className:`BI5t6 ${o?"_5l5M3":""} ${s?"bKWx4":""}`,onClick:this.$DesktopStoryTrayItem3},a(d[4]).createElement(i(d[5]),{clickTargetElementId:this.$DesktopStoryTrayItem1(this.props.reel.id),isClickable:!1,isLink:!1,profilePictureUrl:p,size:t,storyEntrypoint:"reel_feed_timeline",username:c}),a(d[4]).createElement("div",{className:"c6Ldk"},a(d[4]).createElement("div",{className:"rdlLb"},a(d[4]).createElement("span",{className:"jQgLo"},u)),a(d[4]).createElement("div",{className:"_8Scg1"},n&&a(d[4]).createElement(i(d[6]),{className:"ijlbM",isLong:!0,value:n}))))}}s.defaultProps={avatarSize:50,condensed:!1};var o=r(d[9]).connect(function(t,s){const o=r(d[7]).getUserById(t,i(d[2])(s.reel.userId));return{isMuted:Boolean(s.reel.muted),isSeen:r(d[8]).isReelSeen(s.reel),isViewer:t.users.viewerId===s.reel.id,profilePictureUrl:i(d[2])(o.profilePictureUrl),username:i(d[2])(o.username)}})(s);e.default=o},12910602,[12910604,12451903,9699336,9961519,3,9961713,9961621,9699477,9961476,5]);
__d(function() {},12910604,[]);
__d(function(g,r,i,a,m,e,d){"use strict";Object.defineProperty(e,'__esModule',{value:!0}),r(d[0]);var t=function({avatarSize:t,hideAvatarBorder:c,rounded:l}){return a(d[1]).createElement("div",{className:"aDZPy"},a(d[1]).createElement(i(d[2]),{className:"S9Gru",hideAvatarBorder:c,size:t}),a(d[1]).createElement("div",{className:"l9n6R"},a(d[1]).createElement("div",{className:`UhO_X ${l?"DC7KV":""}`}),a(d[1]).createElement("div",{className:`oP6Lh ${l?"DC7KV":""}`})))};e.default=t},12910603,[12910605,3,12910606]);
__d(function() {},12910605,[]);
__d(function(g,r,i,a,m,e,d){"use strict";Object.defineProperty(e,'__esModule',{value:!0}),r(d[0]);var s=class extends a(d[1]).PureComponent{render(){return a(d[1]).createElement("div",{className:"nwXS6"},a(d[1]).createElement(i(d[2]),{className:"_2NjG_",isLink:!0,profilePictureUrl:i(d[3])(this.props.profilePictureUrl),size:50,storyEntrypoint:"reel_feed_timeline",username:i(d[3])(this.props.username)}),a(d[1]).createElement("div",{className:"_0v2O4"},a(d[1]).createElement("div",{className:"SKguc"},a(d[1]).createElement(i(d[4]),{className:"gmFkV",href:r(d[5]).buildUserLink(this.props.username)},this.props.username),this.props.isVerified&&a(d[1]).createElement(i(d[6]),{className:"_0VOjL"})),this.props.name&&a(d[1]).createElement("div",{className:"f5Yes oL_O8"},this.props.name)))}};e.default=s},12910597,[12910607,3,9961713,9699336,9699337,9699352,9961712]);
__d(function() {},12910607,[]);
__d(function(g,r,i,a,m,e,d){"use strict";Object.defineProperty(e,'__esModule',{value:!0});const s=r(d[0])(1122),t=()=>a(d[1]).createElement(r(d[2]).Box,{paddingX:4,paddingY:3},a(d[1]).createElement(r(d[2]).Button,{borderless:!0,href:r(d[3]).DISCOVER_PEOPLE_PATH},r(d[0])(2050)));var l=i(d[7])('FetchingSuggestedUserList',({analyticsContext:l,avatarSize:n="medium",borderlessFollowButton:o=!1,count:u,footer:E,header:c,hideName:U=!1,hideUpsells:_=!1,initialRenderCount:S=r(d[4]).SUL_FETCH_SUGGESTED_COUNT_DEFAULT,onDisplayDone:T,variant:L="LIST",viewModule:C})=>{const{isLoading:h,suggestedUserIds:D}=r(d[5]).useSelector(a(d[1]).useCallback(s=>({isLoading:s.suggestedUsers.isLoadingSuggestions,suggestedUserIds:s.suggestedUsers.ids.toArray()}),[]),r(d[5]).shallowEqual),v=r(d[5]).useDispatch(),F=a(d[1]).useCallback(s=>v(r(d[4]).loadSUL({suggestedCount:s})),[v]);return a(d[1]).useEffect(()=>{0===D.length&&F(r(d[4]).SUL_FETCH_SUGGESTED_COUNT_DEFAULT)},[F,D.length]),a(d[1]).useEffect(()=>{D.length>0&&T()},[T,D]),a(d[1]).createElement(a(d[1]).Fragment,null,a(d[1]).createElement(i(d[6]),{analyticsContext:l,avatarSize:n,borderlessFollowButton:o,hideName:U,hideUpsells:_,initialRenderCount:S,isLoading:h,subHeader:void 0!==c?c:s,userIds:isNaN(u)?D.slice(0,r(d[4]).SUL_FETCH_SUGGESTED_COUNT_DEFAULT):D.slice(0,u),variant:L,viewModule:C}),'LIST'===L&&(void 0!==E?E:a(d[1]).createElement(t,null)))});e.default=l,e.HEADER_TEXT=s},10092571,[9699332,3,9699399,9699334,10092602,5,10092603,9699379]);
__d(function(g,r,i,a,m,e,d){"use strict";Object.defineProperty(e,'__esModule',{value:!0});var n=({analyticsContext:n,avatarSize:t="large",borderlessFollowButton:o=!1,children:l,footer:c,hideName:s=!1,hideStoryRings:u=!1,hideUpsells:E=!1,initialRenderCount:C=r(d[0]).SUL_FETCH_SUGGESTED_COUNT_DEFAULT,isLoading:_,subHeader:p,userIds:I,variant:S="LIST",viewModule:f})=>{const h={},{canFBConnect:T,canImportContacts:v}=r(d[1]).useSelector(a(d[2]).useCallback(n=>({canFBConnect:r(d[3]).shouldDisplayFacebookConnect(n),canImportContacts:r(d[4]).shouldRenderContactImportUpsell(n,'LIST_ITEM')}),[]),r(d[1]).shallowEqual),x=({followedByViewer:n,index:t,userId:o})=>{n||w('recommended_follow_button_tapped',o,t)},F=({userId:n,index:t})=>{w('recommended_username_tapped',n,t)},b=(n,t)=>{if(null!=I)for(let o=n;o<=t-1;++o){const n=I[o];h[n]||(w('recommended_user_impression',n,o),h[n]=!0)}},w=(t,o,l)=>{r(d[5]).logConnectionAction({eventName:t,position:l,targetId:o,containerModule:n,viewModule:f})};return'GRID'===S?a(d[2]).createElement(i(d[6]),{avatarSize:t,isLoading:_,onFollowClick:x,onUsernameClick:F,onVisibilityChange:b,subHeader:p,suffix:a(d[2]).createElement(i(d[7]),{href:r(d[8]).DISCOVER_PEOPLE_PATH}),userIds:I||[]}):a(d[2]).createElement(a(d[2]).Fragment,null,null!=p&&a(d[2]).createElement(r(d[9]).Box,{marginBottom:3,marginTop:4,paddingX:3},a(d[2]).createElement(r(d[9]).Text.Section,null,p)),a(d[2]).createElement(r(d[9]).Box,{color:"ig-background",paddingY:2},!E&&a(d[2]).createElement(a(d[2]).Fragment,null,r(d[10]).checkGraphDifferentiationQE()&&a(d[2]).createElement(i(d[11]),{analyticsContext:r(d[5]).CONNECTIONS_CONTAINER_MODULES.discover_people}),a(d[2]).createElement(i(d[12]),{analyticsContext:n,variant:"LIST_ITEM"}),(T&&r(d[10]).checkGraphDifferentiationQE()||v)&&a(d[2]).createElement(r(d[9]).Box,{paddingY:2},a(d[2]).createElement(r(d[9]).Divider,null))),a(d[2]).createElement(i(d[13]),{avatarSize:t,borderlessFollowButton:o,hideName:s,initialRenderCount:C,isLoading:Boolean(_),onFollowClick:x,onScrollChange:({userId:n,index:t})=>{h[n]||(w('recommended_user_impression',n,t),h[n]=!0)},onUsernameClick:F,userIds:I||[]}),c))};e.default=n},10092603,[10092602,5,3,10092604,10092605,9961616,10092606,10092607,9699334,9699399,9699388,10092608,10092609,9961707]);
__d(function(g,r,i,a,m,e,d){"use strict";Object.defineProperty(e,'__esModule',{value:!0});var n=n=>{const{isLoading:t,onFollowClick:l,onUsernameClick:o,onVisibilityChange:s,subHeader:c,suffix:u,userIds:f}=n,k=n=>{l&&l(n)},p=n=>{o&&o(n)};return t?a(d[0]).createElement(r(d[1]).Box,{alignItems:"center",marginTop:4,width:"100%"},a(d[0]).createElement(r(d[1]).Spinner,null)):a(d[0]).createElement(r(d[1]).Deck,{cardType:"USER",hasBlur:!0,headerText:c,onVisibilityChange:(n,t)=>{s&&s(n,t)},suffix:u},f.map((n,t)=>a(d[0]).createElement(i(d[2]),{id:n,key:t,onFollowClick:k,onUsernameClick:p,position:t})))};e.default=n},10092606,[3,9699399,10092611]);
__d(function(g,r,i,a,m,e,d){"use strict";Object.defineProperty(e,'__esModule',{value:!0});var l=l=>{const{analyticsContext:n,id:s,onFollowClick:t,position:o}=l,{relationship:u,user:c}=r(d[0]).useSelector(a(d[1]).useCallback(n=>({relationship:r(d[2]).getRelationship(n.relationships,l.id),user:r(d[3]).getUserById(n,l.id)}),[l.id]),r(d[0]).shallowEqual),{profilePictureUrl:p,suggestionDescription:f,username:C}=c;return null==p||null==f||null==C?null:a(d[1]).createElement(r(d[4]).UserCard,{button:a(d[1]).createElement(i(d[5]),{analyticsContext:n,onClick:()=>{null!=t&&u&&t({index:o,userId:s,followedByViewer:r(d[2]).followedByViewer(u)})},relationship:u,userId:c.id}),isVerified:c.isVerified,onUsernameClick:()=>{l.onUsernameClick({index:o,userId:s})},src:p,subtitle:f,username:C})};e.default=l},10092611,[5,3,9961477,9699477,9699399,9961615]);
__d(function(g,r,i,a,m,e,d){"use strict";Object.defineProperty(e,'__esModule',{value:!0});const t='connect_to_facebook',n=r(d[0])(28),o=r(d[0])(1699),c=r(d[0])(490);var l=l=>{const{canFBConnect:s,isLoading:u}=r(d[1]).useSelector(a(d[2]).useCallback(t=>({canFBConnect:r(d[3]).shouldDisplayFacebookConnect(t),isLoading:r(d[3]).isInitialLoad(t)}),[]),r(d[1]).shallowEqual),[E,C]=a(d[2]).useState(!1),_=r(d[4]).parseQueryParams();return null!=_[t]&&_[t].length>0&&(i(d[5]).replace(i(d[5]).location.pathname),C(!0)),E?a(d[2]).createElement(r(d[6]).Toast,{duration:1500,onClose:()=>C(!1)},r(d[7]).FACEBOOK_COMPLETED):s&&a(d[2]).createElement(r(d[6]).ListItem,{action:a(d[2]).createElement(r(d[6]).Button,{disabled:u,loading:u,onClick:()=>r(d[8]).redirectToFBOAuth(`${i(d[5]).location.pathname}?${t}=true`,l.analyticsContext)},c),icon:a(d[2]).createElement(r(d[6]).BorderedIcon,{alt:n,color:"facebook",icon:r(d[6]).ICONS.FACEBOOK_FILLED_24_FBCONNECTBLUE,size:r(d[6]).CORE_CONSTANTS.AVATAR_SIZES.medium}),subtitle:o,title:a(d[2]).createElement(r(d[6]).Text.BodyEmphasized,null,n),truncateText:!1})};e.default=l},10092608,[9699332,5,3,10092604,9699381,9699333,9699399,10092613,9699388]);
__d(function(g,r,i,a,m,e,d){"use strict";Object.defineProperty(e,'__esModule',{value:!0});const t=65;class s extends a(d[0]).PureComponent{constructor(...t){super(...t),this.$UserList1=a(d[0]).createRef(),this.$UserList2=(t=>{const{onFollowClick:s}=this.props;s&&s(t)}),this.$UserList3=(({index:t,isVisible:s})=>{const{analyticsContext:n,avatarSize:o,borderlessFollowButton:l,hideName:c,isLoading:h,entryPoint:u,userIds:p}=this.props;return 0===p.length?h?a(d[0]).createElement(r(d[1]).ListItemPlaceholder,{key:t,size:o}):null:a(d[0]).createElement(i(d[2]),{analyticsContext:n,avatarSize:o,borderlessFollowButton:l,entryPoint:u,hideFollowButton:this.props.hideFollowButton,hideName:c,hideStoryRings:this.props.hideStoryRings,id:p[t],isVisible:s,key:p[t],onFollowClick:this.$UserList2,onScrollEnter:this.$UserList4,onUsernameClick:this.$UserList5,position:t})}),this.$UserList4=(t=>{const{onScrollChange:s}=this.props;s&&s(t)}),this.$UserList5=(t=>{const{onUsernameClick:s}=this.props;s&&s(t)})}componentDidUpdate(t){null!=this.$UserList1.current&&this.props.userIds.length===this.props.initialRenderCount&&0===t.userIds.length&&this.$UserList1.current.forceUpdate()}render(){const{containerSize:s,initialRenderCount:n,isLoading:o,onScroll:l,userIds:c}=this.props;return a(d[0]).createElement(a(d[0]).Fragment,null,a(d[0]).createElement(i(d[3]),{containerSize:s,estimatedItemSize:t,initialRenderCount:n,itemCount:c.length||n,onScroll:l,ref:this.$UserList1,renderer:this.$UserList3}),c.length>0&&o&&a(d[0]).createElement(r(d[1]).Box,{alignItems:"center",marginTop:4},a(d[0]).createElement(r(d[1]).Spinner,{size:"medium"})))}}s.defaultProps={borderlessFollowButton:!1,containerSize:'auto',hideFollowButton:!1,hideName:!1,hideStoryRings:!1,initialRenderCount:10,isLoading:!1,entryPoint:'unknown'};var n=s;e.default=n},9961707,[3,9699399,9961709,9961710]);
__d(function(g,r,i,a,m,e,d){"use strict";Object.defineProperty(e,'__esModule',{value:!0}),r(d[0]);const t=({onClick:t,user:l})=>{const{isVerified:n,username:o}=l;return void 0===o?null:a(d[1]).createElement(i(d[2]),{href:r(d[3]).buildUserLink(o),onClick:t,title:o},a(d[1]).createElement(r(d[4]).Box,{direction:"row"},a(d[1]).createElement(r(d[4]).Text.BodyEmphasized,{dangerouslySetClassName:{__className:"rWtOq"},display:"truncated"},a(d[1]).createElement(r(d[4]).Box,{alignItems:"center",direction:"row"},o,!0===n&&a(d[1]).createElement(r(d[4]).Box,{marginStart:2},a(d[1]).createElement(i(d[5]),{size:"small"}))))))};var l=r(d[13]).connect(function(t,l){return{relationship:r(d[7]).getRelationship(t.relationships,l.id),user:r(d[12]).getUserById(t,l.id),viewer:r(d[12]).getViewer(t)}})(({analyticsContext:l,avatarSize:n="medium",borderlessFollowButton:o,entryPoint:s,hideFollowButton:c,hideName:u,hideStoryRings:E,id:C,isVisible:f,onFollowClick:p,onScrollEnter:S,onUsernameClick:y,position:w,relationship:x,user:h,viewer:k})=>{const _=i(d[6])(f),b=r(d[1]).useCallback(()=>{p&&x&&p({index:w,userId:C,followedByViewer:r(d[7]).followedByViewer(x)})},[C,p,w,x]),v=r(d[1]).useCallback(()=>{S({index:w,userId:C})},[C,S,w]),B=r(d[1]).useCallback(()=>{y({index:w,userId:C})},[C,y,w]);r(d[1]).useEffect(()=>{!0!==_&&f&&v()},[v,f,_]);const I=!c&&(null===k||void 0===k?void 0:k.id)!==h.id;return a(d[1]).createElement(r(d[4]).ListItem,{action:I?a(d[1]).createElement(i(d[8]),{analyticsContext:l,borderless:o,onClick:b,relationship:x,userId:h.id,useSmallText:o}):void 0,context:h.suggestionDescription,icon:E?a(d[1]).createElement(i(d[9]),{profilePictureUrl:i(d[10])(h.profilePictureUrl),size:r(d[4]).CORE_CONSTANTS.AVATAR_SIZES[n],username:h.username}):a(d[1]).createElement(i(d[11]),{profilePictureUrl:i(d[10])(h.profilePictureUrl),size:r(d[4]).CORE_CONSTANTS.AVATAR_SIZES[n],storyEntrypoint:s,username:h.username}),subtitle:u?null:h.fullName,title:a(d[1]).createElement(t,{onClick:B,user:h})})});e.default=l},9961709,[9961711,3,9699337,9699352,9699399,9961712,9961667,9961477,9961615,9699339,9699336,9961713,9699477,5]);
__d(function() {},9961711,[]);