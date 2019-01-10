#include "mainwindow.h"
#include <QApplication>
#include <QTextCodec>
#include <QWSServer>

int main(int argc, char *argv[])
{
    QApplication a(argc, argv);
    QTextCodec::setCodecForLocale(QTextCodec::codecForName("UTF-8"));
    QTextCodec::setCodecForTr(QTextCodec::codecForName("UTF-8"));
    QTextCodec::setCodecForCStrings(QTextCodec::codecForName("UTF-8"));
    QTextCodec::setCodecForTr( QTextCodec::codecForName("GBK"));
    QFont font;
    //font.setPointSize(64);
    font.setPixelSize(64);
    font.setFamily(("wenquanyi"));
    //font.setBold(true);
    a.setFont(font);
    MainWindow w;
    w.show();

    return a.exec();
}
