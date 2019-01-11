#include "Widget.h"
#include "ui_Widget.h"
#include <QPainter>
#include <QTransform>
#include <QMessageBox>

Widget::Widget(QWidget *parent) :
    QWidget(parent),
    ui(new Ui::Widget)
{
    ui->setupUi(this);
}

Widget::~Widget()
{
    delete ui;
}

void Widget::on_pushButton_clicked()
{
    static int rotate = 0;
    rotate += 90;
    if(rotate >= 360)
        rotate = 0;
    emit changeRotate(rotate);
}

void Widget::on_checkBox_clicked()
{
    QMessageBox::information(this,"ssssssssss","xccccccc");
}
