#ifndef MAINWINDOW_H
#define MAINWINDOW_H

#include <QMainWindow>
#include <QDebug>
#include <map>

namespace Ui {
class MainWindow;
}

enum Msg       //消息声明
{
    Msg_0 = 0,
    Msg_1,
    Msg_2,
    Msg_3,
    Msg_4,
    Msg_5
};

class MainWindow : public QMainWindow
{
    Q_OBJECT

    typedef void (MainWindow::*pMsgFunc)(QString & msg);

public:
    explicit MainWindow(QWidget *parent = 0);
    ~MainWindow();

private slots:
    void on_btn_0_clicked();      //产生消息
    void on_btn_1_clicked();
    void on_btn_2_clicked();
    void on_btn_3_clicked();
    void on_btn_4_clicked();
    void on_btn_5_clicked();

private:
    void Processer(Msg msg,QString str);  //处理函数
    void MsgFunc0(QString & str);
    void MsgFunc1(QString & str);
    void MsgFunc2(QString & str);
    void MsgFunc3(QString & str);
    void MsgFunc4(QString & str);
    void MsgFunc5(QString & str);

private:
    Ui::MainWindow *ui;
    std::map<Msg,pMsgFunc>map;
};

#endif // MAINWINDOW_H
