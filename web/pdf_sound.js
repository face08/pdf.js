function setup() {
  console.log("初始化");
  // 当前页监听
  window.PDFViewerApplication.eventBus._on("pagechanging", n => {
    console.log("当前页面", n);
  });

  // pre读取文件监听，参数为pdf的url
  window.PDFViewerApplication.eventBus._on("PRE_LOAD_PDF", p => {
    console.log("打开书本", p.url);
  });

  // pdf加载完毕 pdf文档对象
  window.PDFViewerApplication.eventBus._on("LOADED_PDF", pdfDocument => {
    console.log("pdf页数", pdfDocument.numPages);
  });
}

window.addEventListener("APP_INIT", function (event) {
  setup();
});
