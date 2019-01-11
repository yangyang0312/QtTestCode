#ifndef MANAGER_H
#define MANAGER_H

#include <QObject>
#include <QGraphicsScene>
#include <QGraphicsView>
#include "MyGraphicsProxyWidget.h"
#include "Widget.h"


class Manager : public QObject
{
    Q_OBJECT
public:
    explicit Manager(QObject *parent = 0);

signals:

public slots:
    void changeRotate(int rotate);
private:
    Widget * widget;
    QGraphicsScene * scene;
    QGraphicsProxyWidget * w;
    MyGraphicsProxyWidget * myView;
    QGraphicsView * view;
};

#endif // MANAGER_H
