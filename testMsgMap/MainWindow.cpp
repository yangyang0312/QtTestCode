#include "MainWindow.h"
#include "ui_MainWindow.h"

MainWindow::MainWindow(QWidget *parent) :
    QMainWindow(parent),
    ui(new Ui::MainWindow)
{
    ui->setupUi(this);

    map.insert(std::make_pair(Msg_0,reinterpret_cast<pMsgFunc>(&MainWindow::MsgFunc0)));     //初始化消息到处理函数的映射
    map.insert(std::make_pair(Msg_1,reinterpret_cast<pMsgFunc>(&MainWindow::MsgFunc1)));
    map.insert(std::make_pair(Msg_2,reinterpret_cast<pMsgFunc>(&MainWindow::MsgFunc2)));
    map.insert(std::make_pair(Msg_3,reinterpret_cast<pMsgFunc>(&MainWindow::MsgFunc3)));
    map.insert(std::make_pair(Msg_4,reinterpret_cast<pMsgFunc>(&MainWindow::MsgFunc4)));
    map.insert(std::make_pair(Msg_5,reinterpret_cast<pMsgFunc>(&MainWindow::MsgFunc5)));
}

MainWindow::~MainWindow()
{
    delete ui;
}
void MainWindow::on_btn_0_clicked()          //产生消息的函数
{
    Processer(Msg_0,"0 clicked");
}
void MainWindow::on_btn_1_clicked()
{
    Processer(Msg_1,"1 clicked");
}
void MainWindow::on_btn_2_clicked()
{
    Processer(Msg_2,"2 clicked");
}
void MainWindow::on_btn_3_clicked()
{
    Processer(Msg_3,"3 clicked");
}
void MainWindow::on_btn_4_clicked()
{
    Processer(Msg_4,"4 clicked");
}
void MainWindow::on_btn_5_clicked()
{
    Processer(Msg_5,"5 clicked");
}
void MainWindow::Processer(Msg msg,QString str)   //处理函数
{
    if(map.find(msg) != map.end())
        (this->*map[msg])(str);
}
void MainWindow::MsgFunc0(QString & str)
{
    qDebug()<<__PRETTY_FUNCTION__<<str;
}
void MainWindow::MsgFunc1(QString & str)
{
    qDebug()<<__PRETTY_FUNCTION__<<str;
}
void MainWindow::MsgFunc2(QString & str)
{
    qDebug()<<__PRETTY_FUNCTION__<<str;
}
void MainWindow::MsgFunc3(QString & str)
{
    qDebug()<<__PRETTY_FUNCTION__<<str;
}
void MainWindow::MsgFunc4(QString & str)
{
    qDebug()<<__PRETTY_FUNCTION__<<str;
}
void MainWindow::MsgFunc5(QString & str)
{
    qDebug()<<__PRETTY_FUNCTION__<<str;
}
