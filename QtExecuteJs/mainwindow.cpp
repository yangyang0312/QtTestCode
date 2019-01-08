#include "mainwindow.h"
#include "ui_mainwindow.h"
#include <QDebug>
#include <QMouseEvent>
#include <QtWebKit/QWebView>
#include <QtWebKit/QWebPage>
#include <QtWebKit/QWebPage>
#include <QtWebKit/QWebFrame>
#include <QWebInspector>
#include <QWebSettings>
#include <QVariantList>

MainWindow::MainWindow(QWidget *parent) :
    QMainWindow(parent),
    ui(new Ui::MainWindow){
    ui->setupUi(this);
    ui->webView->load(QUrl("qrc:/html.html"));
    //如果加载的html是本地的，则换成
    //ui->webView->load(QUrl::fromLocalFile("E:/html.html"));
    //页面加载完成的消息
    connect(ui->webView, SIGNAL(loadFinished(bool)), this, SLOT(onPageLoadFinished(bool)));
    //将QT窗口暴露给html
    connect(ui->webView->page()->mainFrame(),SIGNAL(javaScriptWindowObjectCleared()),this,SLOT(addMainWindowToHtml()));
    //html调试窗口
    QWebSettings *settings = ui->webView->settings();
    settings->setAttribute(QWebSettings::DeveloperExtrasEnabled, true);
    QWebInspector *inspector = new QWebInspector(this);
    inspector->setWindowFlags(Qt::WindowStaysOnTopHint | Qt::Dialog);
    inspector->setMinimumSize(300, 110);
    inspector->setPage(ui->webView->page());
    inspector->show();
}

MainWindow::~MainWindow(){
    delete ui;
}
//页面加载完成
void MainWindow::onPageLoadFinished(bool){
    qDebug()<<__PRETTY_FUNCTION__<<__LINE__<<ui->webView->url().toString();
}
//暴露QT主窗口到html
void MainWindow::addMainWindowToHtml(){
    ui->webView->page()->mainFrame()->addToJavaScriptWindowObject("QTWindow",this);
}
//暴露给js的无参函数
void MainWindow::JsCallNoParam(){
    qDebug()<<__PRETTY_FUNCTION__<<__LINE__;
}
//暴露给js的有参函数
void MainWindow::JsCallWithParam(int num,QString str){
    qDebug()<<__PRETTY_FUNCTION__<<__LINE__<<num<<str;
}
//暴露给js有返回值的函数
QString MainWindow::JsCallWithReturn(){
    qDebug()<<__PRETTY_FUNCTION__<<__LINE__;
    return QString("This is a string from Qt window.");
}
//无参调用JS
void MainWindow::on_btn_noparam_clicked(){
    qDebug()<<__PRETTY_FUNCTION__<<__LINE__;
    ui->webView->page()->mainFrame()->evaluateJavaScript(QString("QtCallNoParam()"));
}
//有参调用JS
void MainWindow::on_btn_withparam_clicked(){
    qDebug()<<__PRETTY_FUNCTION__<<__LINE__;
    ui->webView->page()->mainFrame()->evaluateJavaScript(QString("QtCallWithParam(123,\"QT String Param.\")"));
}
//JS有返回值的情况
void MainWindow::on_btn_withreturn_clicked(){
    QVariant ret = ui->webView->page()->mainFrame()->evaluateJavaScript(QString("QtCallWithReturn()"));
    qDebug()<<__PRETTY_FUNCTION__<<__LINE__<<"  RET:"<<ret;
}
