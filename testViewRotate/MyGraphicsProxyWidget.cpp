#include "MyGraphicsProxyWidget.h"
#include <QDebug>

MyGraphicsProxyWidget::MyGraphicsProxyWidget(QGraphicsProxyWidget * view,QObject *parent)
    : QObject(parent)
{
    this->view = view;
}

void MyGraphicsProxyWidget::changeRotate(int rotate)
{
    qDebug()<<view->size()<<view->pos()<<view->mapToParent(0,0)<<view->mapToScene(0,0);
    view->setRotation(rotate);
    static int rotateCount = 1;
    if(rotateCount ==1 || rotateCount == 3){
        view->resize(400,300);
    }else{
        view->resize(300,400);
    }
    if(rotateCount == 1){
        view->moveBy(300,0);
    }else if(rotateCount == 2){
        view->moveBy(0,400);
    }else if(rotateCount == 3){
        view->moveBy(-300,0);
    }else{
        view->moveBy(0,-400);
    }
    if(rotateCount == 4)
        rotateCount = 0;
    ++rotateCount;
}
