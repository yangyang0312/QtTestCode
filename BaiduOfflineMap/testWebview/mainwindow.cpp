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
    setWindowFlags(Qt::FramelessWindowHint);
    bDrawRect_ = false;
    bClicked_ = false;
    clickTimer_ = new QTimer(this);
    timerInterval_ = 300;
    connect(clickTimer_,SIGNAL(timeout()),this,SLOT(ClickTimeOut()));
    //ui->webView->load(QUrl("qrc:/BaiduMap.html"));
    ui->webView->load(QUrl::fromLocalFile("E:/normal/API1.0/BaiduMap.html"));
    qDebug()<<QUrl::fromLocalFile("E:/normal/API1.0/BaiduMap.html");
    connect(ui->webView, SIGNAL(loadFinished(bool)), this, SLOT(onPageLoadFinished(bool)));
    connect(ui->webView->page()->mainFrame(),SIGNAL(javaScriptWindowObjectCleared()),this,SLOT(addMainWindowToHtml()));
    ui->webView->installEventFilter(this);
    ui->draw->installEventFilter(this);
    ui->widgetCall->hide();

    QWebSettings *settings = ui->webView->settings();
    settings->setAttribute(QWebSettings::DeveloperExtrasEnabled, true);
    QWebInspector *inspector = new QWebInspector(this);
    inspector->setWindowFlags(Qt::WindowStaysOnTopHint | Qt::Dialog);
    inspector->setMinimumSize(300, 600);
    inspector->setPage(ui->webView->page());
    inspector->show();
}

MainWindow::~MainWindow(){
    delete ui;
}

bool MainWindow::eventFilter(QObject *obj, QEvent *event){
    if(obj == ui->webView){
        if(event->type() == QEvent::MouseButtonPress){
            startPos_ = ((QMouseEvent*)event)->pos();
            FixPoint(startPos_);
            bClicked_ = true;
            //qDebug()<<__PRETTY_FUNCTION__<<"MouseButtonPress"<<startPos_;
            on_cancel_clicked();
            clickTimer_->start(timerInterval_);
        } else if(event->type() == QEvent::MouseMove){
            endPos_ = ((QMouseEvent*)event)->pos();
            FixPoint(endPos_);
            //qDebug()<<__PRETTY_FUNCTION__<<"MouseMove"<<endPos_;
            if(bDrawRect_ && bClicked_){
                ui->webView->lower();
                bDrawRect_ = true;
                ui->draw->update();
                return true;
            }
        } else if(event->type() == QEvent::MouseButtonRelease) {
            //qDebug()<<__PRETTY_FUNCTION__<<"MouseButtonRelease"<<((QMouseEvent*)event)->pos();
            //qDebug()<<startPos_<<endPos_;
            clickTimer_->stop();
            if(bDrawRect_ && bClicked_){
                QVariant result = ui->webView->page()->mainFrame()->evaluateJavaScript(QString("getBoundsNumbers(") + QString::number(startPos_.x()) + "," + QString::number(startPos_.y()) + "," + QString::number(endPos_.x()) + "," + QString::number(endPos_.y()) + ")");
                phoneNumbers_ = result.toStringList();
                if(phoneNumbers_.size() <= 0){
                    on_cancel_clicked();
                }else{
                    ui->widgetCall->move((startPos_.x() + endPos_.x()) / 2 - 90,(startPos_.y() + endPos_.y()) / 2 - 30);
                    ui->widgetCall->raise();
                    ui->widgetCall->show();
                }
            }
            bClicked_ = false;
        }
    } else if(obj == ui->draw) {
        if(event->type() == QEvent::Paint){
            if(bDrawRect_){
                QPainter painter(ui->draw);
                painter.setPen(QPen(Qt::blue,3,Qt::DashLine));
                painter.setBrush(QBrush(QColor(226,224,241,127),Qt::SolidPattern));
                //qDebug()<<"repaint:"<<startPos_<<endPos_;
                painter.drawRect(QRect(startPos_,endPos_));
            }
            return true;
        }else if(event->type() == QEvent::MouseButtonPress){
            on_cancel_clicked();
        }
    }
    return QMainWindow::eventFilter(obj,event);
}

void MainWindow::ClickTimeOut(){
    clickTimer_->stop();
    int offx = abs(endPos_.x() - startPos_.x());
    int offy = abs(endPos_.y() - startPos_.y());
    if(offx < 15 && offy < 15 && bClicked_){
        qDebug()<<__PRETTY_FUNCTION__<<"draw rect";
        ui->webView->lower();
        bDrawRect_ = true;
        ui->draw->update();
    }
}

void MainWindow::onPageLoadFinished(bool){
    qDebug()<<__PRETTY_FUNCTION__<<__LINE__<<ui->webView->url().toString();
    //qDebug()<<__PRETTY_FUNCTION__<<__LINE__<<"map load finished"<<ui->webView->url().toString()<<1111111111111111111111111111111111111111111111111111111111111111111111111;
    //if(QString("qrc:/images/Gaode.html") == ui->webView->url().toString())
    if(QString("file:///E:/normal/API1.0/BaiduMap.html") == ui->webView->url().toString())
    {
        //is_load_finish = true;
        //addLocalLocationMarker();
    }
    qDebug()<<__PRETTY_FUNCTION__<<__LINE__<<"OUT";
}

void MainWindow::on_zoomout_clicked(){
    on_cancel_clicked();
    ui->webView->page()->mainFrame()->evaluateJavaScript(QString("reduce()"));
}

void MainWindow::on_zoomin_clicked(){
    on_cancel_clicked();
    ui->webView->page()->mainFrame()->evaluateJavaScript(QString("boost()"));
}

void MainWindow::on_fit_clicked(){
    on_cancel_clicked();
    ui->webView->page()->mainFrame()->evaluateJavaScript(QString("fitView()"));
}

void MainWindow::on_add_clicked(){
    on_cancel_clicked();
    QString method= QString("addMarker(\"111111122222222223333\",\"" + ui->name->text() + "\",\"") + ui->latitude->text() + "\",\"" + ui->longitude->text() + "\",\"images/marker_red.png\",\"" + ui->number->text() + "\")";
    ui->webView->page()->mainFrame()->evaluateJavaScript(method);
}

void MainWindow::on_delete_2_clicked(){
    on_cancel_clicked();
    ui->webView->page()->mainFrame()->evaluateJavaScript(QString("delMarker(\"") + ui->name->text() + "\")");
}

void MainWindow::on_delete_all_clicked(){
    on_cancel_clicked();
    ui->webView->page()->mainFrame()->evaluateJavaScript(QString("delAllMarker()"));
}

void MainWindow::addMainWindowToHtml(){
    ui->webView->page()->mainFrame()->addToJavaScriptWindowObject("mainWindow",this);
}

void MainWindow::callNumber(QString number){
    qDebug()<<__PRETTY_FUNCTION__<<number;
}

void MainWindow::FixPoint(QPoint &point){
    if(point.x() < 0){
        point.setX(0);
    }else if (point.x() > ui->draw->width() - 3) {
        point.setX(ui->draw->width() - 3);
    }
    if(point.y() < 0){
        point.setY(0);
    }else if (point.y() > ui->draw->height() - 3) {
        point.setY(ui->draw->height() - 3);
    }
}

void MainWindow::HideDrawLayer(){
    ui->widgetCall->hide();
    ui->widgetCall->lower();
    ui->draw->lower();
    ui->draw->update();
    bDrawRect_ = false;
}

void MainWindow::on_call_clicked(){
    HideDrawLayer();
    qDebug()<<__PRETTY_FUNCTION__<<phoneNumbers_;
}

void MainWindow::on_cancel_clicked(){
    phoneNumbers_.clear();
    HideDrawLayer();
}

void MainWindow::on_check_type_stateChanged(int arg1)
{
    if(ui->check_type->isChecked()){
        ui->webView->page()->mainFrame()->evaluateJavaScript(QString("showSatellite()"));
    } else {
        ui->webView->page()->mainFrame()->evaluateJavaScript(QString("showNormal()"));
    }
}
