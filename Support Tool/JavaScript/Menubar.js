function createNavBar(isPage) {
	if (isPage==1) {
		var path = "../";
	} else {
		var path = "";
	}
	
	var navBar = "";
	navBar += "<div class='menubar'>";
	navBar += "<ul>";
	
	navBar += "<li>";
	navBar += "<span class='logo'><img src='" + path + "../Image/icon_profile.png'>Support Tool</span>";
	navBar += "</li>";
	
	navBar += "<li>";
	navBar += "<a href='#'>통계 기능 ▼</a>";
	navBar += "<ul>";
	navBar += "<li><a href='" + path + "../Page/Statistics/QnaCategory.html'>문의 카테고리 분석</a></li>";
	navBar += "</ul>";
	navBar += "</li>";
	
	navBar += "<li>";
	navBar += "<a href='#'>업무 보조 기능 ▼</a>";
	navBar += "<ul>";
	navBar += "<li><a href='" + path + "../Page/Support/CreateMailText.html'>우편 문구 템플릿</a></li>";
	navBar += "<li><a href='" + path + "../Page/Support/HTMLTagGenerator.html'>HTML 태그 생성</a></li>";
	navBar += "</ul>";
	navBar += "</li>";
	
	navBar += "<li>";
	navBar += "<a href='#'>운영툴 보조 기능 ▼</a>";
	navBar += "<ul>";
	navBar += "<li><a href='" + path + "../Page/Tool/GameLogConverter.html'>게임 로그 분석 보조</a></li>";
	navBar += "</ul>";
	navBar += "</li>";
	
	navBar += "</ul>";
	navBar += "</div>";
	
	$("Header").html(navBar);
	$(".logo").attr("onclick", "location.href='" + path + "../Page/Main.html'");
	$(".logo").css("cursor", "pointer");
}