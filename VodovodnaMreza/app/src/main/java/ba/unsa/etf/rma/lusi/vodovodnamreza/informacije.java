package ba.unsa.etf.rma.lusi.vodovodnamreza;

import android.widget.ImageView;

import java.io.Serializable;

/**
 * Created by Lusi on 4/5/2018.
 */

public class informacije implements Serializable {
    public String getTekstInfo() {
        return tekstInfo;
    }

    public void setTekstInfo(String tekstInfo) {
        this.tekstInfo = tekstInfo;
    }

    public int getSlika() {
        return slika;
    }

    public void setSlika(int slika) {
        this.slika = slika;
    }

    private String tekstInfo;
    private int slika;

public informacije(String tekst, int sl){
    tekstInfo=tekst;
    slika=sl;
}

}
